pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install Core Packages') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh './script/test'
      }
    }

    stage('Deploy') {
      steps {
       sh './script/deploy'
      }
    }
  }
}
