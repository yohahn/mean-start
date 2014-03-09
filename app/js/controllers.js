var meanStartControllers = angular.module('meanStartControllers', []);

meanStartControllers.controller('WorkListCtrl', ['$scope', 'Work',
    function($scope, Work) {
        $scope.works = Work.query();
        $scope.orderProp = 'order';
    }
]);

meanStartControllers.controller('WorkDetailCtrl', ['$scope', '$routeParams', 'Work',
    function($scope, $routeParams, Work) {
        $scope.work = Work.get({workId: $routeParams.workId});

        $scope.hello = function(name) {
            alert('Hello ' + (name || 'world') + '!');
        }
    }
]);
