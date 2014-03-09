
var meanStartApp = angular.module('meanStartApp', []);

meanStartApp.controller('WorkListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('works/works.json').success(function(data) {
            $scope.works = data;
        });

        $scope.orderProp = 'order';
    }]);
