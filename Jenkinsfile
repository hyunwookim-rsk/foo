pipeline {
  agent none
  stages {
    stage("Build") {
        steps {
            script {
                myImage = docker.build("test/node:latest") // build the Dockerfile
              }
        }
    }

    // you can execute your Docker container and run some specific command you desire
    stage("Run Docker Container") {
        steps {
            script {
                myImage.withRun("--name my-container") {
                    sh """
                        node -version
                    """
                }
            }
        }
    }
  }
}
