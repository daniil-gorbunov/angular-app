import app from '../src/app';

describe('ArticleComponent', function () {
    let element, httpBackend, mockArticle, url;
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

    beforeEach(angular.mock.inject(function ($rootScope, $compile) {
        httpBackend.expectGET(url).respond(articlesList);
        element = $compile('<articles-component></articles-component>')($rootScope);
        httpBackend.flush();
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should render article for any entity in array', function () {
        expect(element.find('li').length).toBe(articlesList.length);
    });

    it('should render each entity correctly', function () {
        expect(element.find('ul').find('a').eq(0).text()).toEqual('Article 1');
    });
});
