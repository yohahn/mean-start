var meanStartControllers = angular.module('meanStartControllers', []);

meanStartControllers.controller('WorkListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('works/works.json').success(function(data) {
            $scope.works = data;
        });

        $scope.orderProp = 'order';
    }
]);

meanStartControllers.controller('WorkDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('works/' + $routeParams.workId + '.json').success(function(data) {
            $scope.work = data;
        });
    }
]);
