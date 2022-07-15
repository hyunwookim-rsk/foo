pipeline {
  agent any
  stages {
    stage("Build") {
        steps {
            script {
                myImage = docker.build("apidoc-image", "-f ./Dockerfile --no-cache .") // build the Dockerfile
              }
        }
    }

    // you can execute your Docker container and run some specific command you desire
    stage("Run Docker Container") {
        steps {
            script {
                myImage.withRun("--name my-container -it --entrypoint=/bin/bash -v /apiDoc:/app/apiDoc") {
                    sh """
                        docker exec my-container node -v
                    """
                    sh """
                        docker exec my-container npx apidoc -c ./apidoc.json -i ./ -o ./apiDoc/
                    """
                    sh """
                        ls -al /apiDoc
                    """
                }
            }
        }
    }
  }
}
