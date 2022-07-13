pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stage('build') {
        steps {
            sh 'node --version'
        }
        steps {
            echo 'Testing....'
        }
    }
}
