pipeline {
  agent any

  triggers {
    pollSCM('H/5 * * * *')
  }

  environment {
    IMAGE_NAME = "one-tier-app"
    DOCKERHUB_REPO = "kapilkewatdevops/one-tier-app"
    IMAGE_TAG = "${env.BUILD_NUMBER}"
    GIT_BRANCH = "main"
    GIT_REPO_URL = "https://github.com/kapil1997kewat-bit/one-tier-app.git"
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
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
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
  }
}
