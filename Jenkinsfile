pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh './script/test'
      }
    }

    stage('Build') {
      steps {
       sh './script/build'
      }
    }
  }
}
