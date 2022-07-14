pipeline {
    agent {
        docker { 
            image 'node:7-alpine' 
            args '-it --entrypoint=/bin/bash'
             }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
