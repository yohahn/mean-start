
var meanStartApp = angular.module('meanStartApp', []);

meanStartApp.controller('WorkListCtrl', function($scope) {
    $scope.works = [
        {'name': 'phase 1: angular only',
         'description': 'introduce angular only, not even bootstrap!'},
        {'name': 'phase 2: node and express',
         'description': 'next up: node and express, no mongo yet.'},
        {'name': 'phase 3: mongo',
         'description': 'time to start using mongo.'}
    ];

    $scope.name = "World";
});