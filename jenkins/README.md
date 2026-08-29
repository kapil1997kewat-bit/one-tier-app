# Jenkins setup

1. Install Jenkins in your environment.
2. Create a pipeline job and point it to this repository.
3. Use the Jenkinsfile in the project root.
4. Update the Git URL in the Jenkinsfile before running it.

Example:

```groovy
git branch: 'main', url: 'https://github.com/<your-github-username>/one-tier-app.git'
```

5. Make sure Docker and Minikube are installed and available on the Jenkins runner.

6. Run the pipeline.

The pipeline will:
- install dependencies
- build the app
- create the Docker image
- load the image into Minikube
- deploy the Helm chart
