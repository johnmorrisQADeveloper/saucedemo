pipeline {
   agent any

   stages {
        stage('cloning git') {
            steps {
                git 'https://github.com/johnmorrisQADeveloper/saucedemo.git'
            }
        }
        stage('install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('run test') {
            steps {
                sh 'npm test'
            }
        }
   }
}