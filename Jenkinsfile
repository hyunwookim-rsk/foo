pipeline {
    agent {
        docker { 
            image 'node:7-alpine' 
            label 'support_ubuntu_docker'
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
