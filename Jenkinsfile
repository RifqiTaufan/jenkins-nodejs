pipeline {
  agent any

  tools {
    nodejs "NodeJS_20"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/<your-username>/jenkins-nodejs-demo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build Complete') {
      steps {
        echo '✅ Build and test stages completed successfully!'
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
    success {
      echo 'All tests passed!'
    }
    failure {
      echo 'Something went wrong 😢'
    }
  }
}