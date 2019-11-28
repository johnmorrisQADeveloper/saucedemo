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
                sh 'npm run selenium-postinstall'
            }
        }
        stage('run test') {
            steps {
                sh 'npm test'
            }
        }
   }
}