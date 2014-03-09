describe('MeanStart controllers', function() {

    describe('WorkListCtrl', function() {
        var scope, ctrl;

        beforeEach(module('meanStartApp'));

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('WorkListCtrl', { $scope: scope });
        }));

        it('should create "works" model with 3 works', function() {
            expect(scope.works.length).toBe(3);
        });

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('order');
        });
    });
});