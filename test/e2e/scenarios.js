/**
 * Created with IntelliJ IDEA.
 * User: yohahnkim
 * Date: 3/8/14
 * Time: 8:04 PM
 * To change this template use File | Settings | File Templates.
 */
describe('MeanStart App', function() {

    describe('Work list view', function() {

        beforeEach(function() {
            browser().navigateTo('../../app/index.html');
        });

        it('should filter the work list as user types into the search box', function() {
            expect(repeater('.works li').count()).toBe(3);

            input('query').enter('angular');
            expect(repeater('.works li').count()).toBe(1);

            input('query').enter('mongo');
            expect(repeater('.works li').count()).toBe(2);
        });

        it('should display the current filter value within an element with id "status', function() {
            expect(element('#status').text()).toMatch(/Current filter: \s*$/);

            input('query').enter('angular');

            expect(element('#status').text()).toMatch(/Current filter: angular\s*$/);

            // alternative version of the last assertion that tests just the value of the binding
            using('#status').expect(binding('query')).toBe('angular');
        });
    });
});