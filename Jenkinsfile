pipeline {
   agent any

   stages {
        stage('cloning git') {
            steps {
                git 'https://github.com/johnmorrisQADeveloper/saucedemo.git'
            }
        }
        stage('run test') {
            steps {
                sh 'npm test'
            }
        }
   }
}