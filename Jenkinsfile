pipeline {
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test and Build'){
            parallel {
                stage('Create Build Artifacts') {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}
