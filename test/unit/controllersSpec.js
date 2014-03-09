'use strict';

describe('MeanStart controllers', function() {

    // Load our app module definition before each test.
    beforeEach(module('meanStartApp'));

    describe('WorkListCtrl', function() {
        var scope, ctrl, $httpBackend;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service.
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('works/works.json').respond([{name: 'mongo'}, {name: 'bootstrap'}]);

            scope = $rootScope.$new();
            ctrl = $controller('WorkListCtrl', { $scope: scope });
        }));

        it('should create "works" model with 2 works fetched from xhr', function() {
            expect(scope.works).toBeUndefined();
            $httpBackend.flush();

            expect(scope.works).toEqual([{name: 'mongo'}, {name: 'bootstrap'}]);
        });

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('order');
        });
    });

    describe('WorkDetailCtrl', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('works/200.json').respond({name:'Test Work!'});

            $routeParams.workId = '200';
            scope = $rootScope.$new();
            ctrl = $controller('WorkDetailCtrl', {$scope: scope});
        }));

        it('should fetch work detail', function() {
            expect(scope.work).toBeUndefined();
            $httpBackend.flush();

            expect(scope.work).toEqual({name:'Test Work!'});
        });
    });
});
