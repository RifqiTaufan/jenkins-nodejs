pipeline {
  agent any

  environment {
    NODE_ENV = "test"
  }

  stages {
    stage('Checkout') {
      steps {
        echo '📥 Pulling code from GitHub...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Installing npm packages...'
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        echo '🧪 Running Jest tests...'
        sh 'npx jest --ci --reporters=default --reporters=jest-junit'
      }
      post {
        always {
          junit 'junit.xml'
        }
      }
    }

    stage('Build') {
      steps {
        echo '🔧 Building Node.js app...'
        sh 'echo "Build step placeholder (optional)"'
      }
    }

    stage('Deploy') {
      steps {
        echo '🚀 Deploying application...'
        sh 'pm2 restart index.js || pm2 start index.js'
      }
    }
  }

  post {
    success {
      echo '🎉 Build and deploy successful!'
    }
    failure {
      echo '❌ Build failed. Check logs.'
    }
  }
}