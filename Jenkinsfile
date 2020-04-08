pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Install Core Packages') {
      steps {
        sh 'npm install'
      }
    }

    stage('Install PM2') {
      steps {
        sh 'npm install -g pm2@latest'
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
