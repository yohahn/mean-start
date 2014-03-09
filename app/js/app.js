var meanStartApp = angular.module('meanStartApp', [
    'ngRoute',
    'meanStartControllers'
]);

meanStartApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/works', {
                templateUrl: 'partials/work-list.html',
                controller: 'WorkListCtrl'
            }).
            when('/works/:workId', {
                templateUrl: 'partials/work-detail.html',
                controller: "WorkDetailCtrl"
            }).
            otherwise({
                redirectTo: '/works'
            });
    }
]);