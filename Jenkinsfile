pipeline {
  agent { dockerfile true }

  stages {
    stage('Install') {
      steps {
        sh 'node -v '      
        sh 'yarn -v'
        sh 'ember -v'

      }
    }
  }
}
