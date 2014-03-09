'use strict';

var meanStartServices = angular.module('meanStartServices', ['ngResource']);

meanStartServices.factory('Work', ['$resource',
    function($resource) {
        return $resource('works/:workId.json', {}, {
            query: {method:'GET', params:{workId:'works'}, isArray:true}
        });
    }
]);
