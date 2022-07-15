pipeline {
  agent any
  stages {
    stage("Build") {
        steps {
            script {
                myImage = docker.build("apidoc-image", "-f ./Dockerfile .") // build the Dockerfile
              }
        }
    }

    // you can execute your Docker container and run some specific command you desire
    stage("Run Docker Container") {
        steps {
            sh """
                mkdir -p ./apiDoc
            """
            script {
                myImage.withRun("--name my-container -it --entrypoint=/bin/bash -v ${pwd}/apiDoc:/app/apiDoc") {
                    sh """
                        docker exec my-container node -v
                    """
                    sh """
                        docker exec my-container npx apidoc -c ./apidoc.json -i ./ -o /app/apiDoc/
                    """
                    sh """
                        ls -al ./apiDoc
                    """
                }
            }
        }
    }
  }
}
