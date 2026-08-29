pipeline {
  agent any

  environment {
    IMAGE_NAME = "one-tier-app"
    DOCKERHUB_REPO = "kapilkewatdevops/one-tier-app"
    IMAGE_TAG = "${env.BUILD_NUMBER}"
    HELM_RELEASE = "one-tier-app"
    GIT_BRANCH = "main"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: env.GIT_BRANCH, url: 'https://github.com/kapil1997kewat-bit/one-tier-app.git'
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
        sh '''
          docker build -t ${DOCKERHUB_REPO}:${IMAGE_TAG} .
          docker tag ${DOCKERHUB_REPO}:${IMAGE_TAG} ${DOCKERHUB_REPO}:latest
        '''
      }
    }

    stage('Push Image to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
          sh '''
            echo "$DOCKERHUB_PASS" | docker login -u "$DOCKERHUB_USER" --password-stdin
            docker push ${DOCKERHUB_REPO}:${IMAGE_TAG}
            docker push ${DOCKERHUB_REPO}:latest
          '''
        }
      }
    }

    stage('Update Helm image tag') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'github-creds', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) {
          sh '''
            export DOCKERHUB_REPO="$DOCKERHUB_REPO"
            export IMAGE_TAG="$IMAGE_TAG"
            python - <<'PY'
import os
from pathlib import Path
path = Path('helm/one-tier-app/values.yaml')
text = path.read_text()
text = text.replace('repository: your-dockerhub-username/one-tier-app', 'repository: ' + os.environ['DOCKERHUB_REPO'])
text = text.replace('tag: latest', 'tag: ' + os.environ['IMAGE_TAG'])
path.write_text(text)
PY
            git config user.name "Jenkins CI"
            git config user.email "jenkins@localhost"
            git add helm/one-tier-app/values.yaml
            git diff --cached --quiet || git commit -m "Update image tag to ${IMAGE_TAG}"
            git remote set-url origin https://${GIT_USER}:${GIT_PASS}@github.com/kapil1997kewat-bit/one-tier-app.git
            git push origin HEAD:${GIT_BRANCH}
          '''
        }
      }
    }
  }
}
