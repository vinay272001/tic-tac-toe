pipeline {
    
    agent any
    tools {
        nodejs "node"
        dockerTool "docker"
    }
    stages {
        stage('Install Packages') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/vinay272001/tic-tac-toe.git']])
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Lint-Check') {
            steps {
                sh 'echo "In the Lint-check stage!!!"'
                // sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "In the test stage!!!"'
                // sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t vinagarw/TIC-TAC-TOE .'
                
                withCredentials([string(credentialsId: 'dockerhubpwd', variable: 'dockerhubpwd')]) {
                // some block
                }

                sh 'docker login -u vinagarw -p ${dockerhubpwd}'
                sh 'docker push vinagarw/TIC-TAC-TOE'
            }
        }
    }
}