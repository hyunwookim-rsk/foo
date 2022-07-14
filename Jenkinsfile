pipeline {
    agent {
        docker { 
            image 'node:7-alpine' 
            args '-it'
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
