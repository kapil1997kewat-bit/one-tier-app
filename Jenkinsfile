pipeline {
  agent any

  triggers {
    pollSCM('H/5 * * * *')
  }

  environment {
    IMAGE_NAME = 'one-tier-app'
    DOCKERHUB_REPO = 'kapilkewatdevops/one-tier-app'
    IMAGE_TAG = "${env.BUILD_NUMBER}"
    GIT_BRANCH = 'main'
    GIT_REPO_URL = 'https://github.com/kapil1997kewat-bit/one-tier-app.git'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: env.GIT_BRANCH, url: env.GIT_REPO_URL
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build App') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        bat '''
          docker build -t %DOCKERHUB_REPO%:%IMAGE_TAG% .
          docker tag %DOCKERHUB_REPO%:%IMAGE_TAG% %DOCKERHUB_REPO%:latest
        '''
      }
    }

    stage('Push Image to Docker Hub') {
      when {
        branch 'main'
      }
      steps {
        withCredentials([
          usernamePassword(
            credentialsId: '5b6cb800-ef4b-44da-972a-074972fedb31',
            usernameVariable: 'DOCKERHUB_USER',
            passwordVariable: 'DOCKERHUB_PASS'
          )
        ]) {
          bat '''
            echo %DOCKERHUB_PASS% | docker login -u %DOCKERHUB_USER% --password-stdin
            docker push %DOCKERHUB_REPO%:%IMAGE_TAG%
            docker push %DOCKERHUB_REPO%:latest
          '''
        }
      }
    }
  }

  post {
    always {
      cleanWs()
    }
    failure {
      echo 'Pipeline failed. Please check the logs above.'
    }
  }
}
