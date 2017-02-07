'use strict';

describe('Articles Service', function () {
    let suite;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        suite = {};
        suite.$httpBackend = $injector.get('$httpBackend');
        suite.$httpBackend.when('GET', '/article').respond([
            {
                _id: 1,
                header: 'Article 1',
                description: 'Description 1',
                content: 'Content 1',
            },
            {
                _id: 2,
                header: 'Article 2',
                description: 'Description 2',
                content: 'Content 2',
            }
        ]);

        suite.Article = $injector.get('Article');
    }));

    afterEach(function () {
        suite.$httpBackend.verifyNoOutstandingExpectation();
        suite.$httpBackend.verifyNoOutstandingRequest();
        suite = null;
    });

    it('should return items on the start', function () {
        let articles;

        articles = suite.articlesService.getarticles();
        expect(articles).toBeDefined();
        expect(articles.length).toBe(0);

        suite.$httpBackend.expectGET('/article');
        suite.$httpBackend.flush();

        articles = suite.articlesService.getarticles();
        expect(articles).toBeDefined();
        expect(articles.length).toBe(2);
    });

    it('should not change items link after request', function () {
        var items = suite.itemsService.getItems();

        suite.$httpBackend.flush();
        expect(suite.itemsService.getItems()).toBe(items);
    });
});
