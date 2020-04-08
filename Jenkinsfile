def COLOR_MAP = ['SUCCESS': 'good', 'FAILURE': 'danger', 'UNSTABLE': 'danger', 'ABORTED': 'danger']

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {
  agent any

  environment {
    BUILD_USER = ''
  }

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

  post {
    always {
      script {
        BUILD_USER = getBuildUser()
      }

      slackSend channel: '#devops',
        color: COLOR_MAP[currentBuild.currentResult],
        message:
         "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} number ${env.BUILD_NUMBER} has been builded  by ${BUILD_USER}\n More info at: ${env.BUILD_URL}"
    }
	}
}
