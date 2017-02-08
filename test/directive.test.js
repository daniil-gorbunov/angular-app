import app from '../src/app';

describe('ArticleFormDirective', function () {
    let element, httpBackend, mockArticle, url;
    const article = {
        _id: 1,
        header: 'Article 1',
        description: 'Description 1',
        content: 'Content 1',
    };

    beforeEach(angular.mock.module(app));

    beforeEach(angular.mock.inject(function ($injector, Article, $httpBackend, API) {
        mockArticle = Article;
        httpBackend = $httpBackend;
        url = `${API.BASE_URL}${API.ARTICLE}/1`;
    }));

    beforeEach(angular.mock.inject(function ($rootScope, $compile, $routeParams) {
        angular.extend($routeParams, {id: 1});
        httpBackend.expectGET(url).respond(article);
        element = $compile('<article-form-directive></article-form-directive>')($rootScope);
        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should render article form', function () {
        expect(element.find('h1').eq(0).text()).toEqual(article.header);
    });
});
