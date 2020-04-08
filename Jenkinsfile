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
      echo 'I will always say Hello again!'

      slackSend channel: '#devops',
        color: COLOR_MAP[currentBuild.currentResult],
        message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n More info at: ${env.BUILD_URL}"
		}
	}
}
