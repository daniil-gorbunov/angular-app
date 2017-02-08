import app from '../src/app';

describe('ArticleFormDirective', function () {
    let mockArticle, httpBackend, url;
    const articlesList = [
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
    ];

    beforeEach(angular.mock.module(app));

    beforeEach(angular.mock.inject(function ($injector, Article, $httpBackend, API) {
        mockArticle = Article;
        httpBackend = $httpBackend;
        url = `${API.BASE_URL}${API.ARTICLE}`;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
    
    it('should pass', angular.mock.inject(function (Article) {
        httpBackend.expectGET(url).respond(articlesList);
        const result = mockArticle.query();
        httpBackend.flush();

        expect(result[0].header).toEqual('Article 1');
    }));
});
