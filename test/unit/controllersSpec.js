describe('MeanStart controllers', function() {
    beforeEach(module('meanStartApp'));

    describe('WorkListCtrl', function() {

        it('should create "works" model with 3 works', inject(function($controller) {
            var scope = {},
                ctrl = $controller('WorkListCtrl', { $scope: scope });

            expect(scope.works.length).toBe(3);
        }));
    });
});