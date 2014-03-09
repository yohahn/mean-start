
var meanStartApp = angular.module('meanStartApp', []);

meanStartApp.controller('WorkListCtrl', function($scope) {
    $scope.works = [
        {'name': 'angular only (phase 1)',
         'description': 'introduce angular only, not even bootstrap!',
         'order': 1},
        {'name': 'node and express (phase 2)',
         'description': 'next up: node and express, no mongo yet.',
         'order': 2},
        {'name': 'mongo (phase 3)',
         'description': 'time to start using mongo.',
         'order': 3}
    ];

    $scope.orderProp = 'order';

    $scope.name = "World";
});