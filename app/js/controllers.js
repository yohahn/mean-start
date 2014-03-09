var meanStartControllers = angular.module('meanStartControllers', []);

meanStartControllers.controller('WorkListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('works/works.json').success(function(data) {
            $scope.works = data;
        });

        $scope.orderProp = 'order';
    }
]);

meanStartControllers.controller('WorkDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.workId = $routeParams.workId;
    }
]);
