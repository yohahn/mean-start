'use strict';

describe('MeanStart controllers', function() {

    beforeEach(function() {
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('meanStartApp'));
    beforeEach(module('meanStartServices'));

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
            expect(scope.works).toEqualData([]);
            $httpBackend.flush();

            expect(scope.works).toEqualData([{name: 'mongo'}, {name: 'bootstrap'}]);
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
            expect(scope.work).toEqualData({});
            $httpBackend.flush();

            expect(scope.work).toEqualData({name:'Test Work!'});
        });
    });
});
