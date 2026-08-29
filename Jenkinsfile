pipeline {
  agent any

  environment {
    IMAGE_NAME = "one-tier-app"
    IMAGE_TAG = "latest"
    DOCKER_IMAGE = "${IMAGE_NAME}:${IMAGE_TAG}"
    HELM_RELEASE = "one-tier-app"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/<your-github-username>/one-tier-app.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build App') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ${DOCKER_IMAGE} .'
      }
    }

    stage('Load Image to Minikube') {
      steps {
        sh 'minikube image load ${DOCKER_IMAGE}'
      }
    }

    stage('Deploy with Helm') {
      steps {
        sh 'helm upgrade --install ${HELM_RELEASE} ./helm/one-tier-app --set image.repository=${IMAGE_NAME} --set image.tag=${IMAGE_TAG} --set image.pullPolicy=Never'
      }
    }
  }
}
