pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    tools{
        node 'node'
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
