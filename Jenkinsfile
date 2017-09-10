#!/usr/bin/env groovy

pipeline {
    agent { docker 'maven:3-alpine' }

    options {
        timeout(time: 1, unit: 'HOURS')
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }

    stages {
        stage('Build') {
            steps {
                sh 'mvn -B -u -DskipTests clean install'
            }
        }
    }
}
