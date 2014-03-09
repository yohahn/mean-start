'use strict';

describe('MeanStart App', function() {

    it('should redirect index.html to index.html#/works', function() {
        browser().navigateTo("app/index.html");
        expect(browser().location().url()).toBe('/works');
    });

    describe('Work list view', function() {

        beforeEach(function() {
            browser().navigateTo('../../app/index.html');
        });

        it('should filter the work list as user types into the search box', function() {
            expect(repeater('.works li').count()).toBe(4);

            input('query').enter('angular');
            expect(repeater('.works li').count()).toBe(1);

            input('query').enter('mongo');
            expect(repeater('.works li').count()).toBe(2);
        });

        it('should be possible to control work order via the drop down select box', function() {
            // let's narrow the dataset to make the test assertions shorter
            input('query').enter('mongo');

            expect(repeater('.works li', 'Work List').column('work.name')).
                toEqual(["node and express (phase 2)",
                         "mongo (phase 3)"]);

            select('orderProp').option('Alphabetical');

            expect(repeater('.works li', 'Work List').column('work.name')).
                toEqual(["mongo (phase 3)",
                         "node and express (phase 2)"]);
        });
    });

    describe('Work detail view', function() {

        beforeEach(function() {
            browser().navigateTo('app/index.html#/works/101');
        });

        it('should display placeholder page with workId', function() {
            expect(binding('workId')).toBe('101');
        });
    });
});
