import tpl from './template.html';

class ArticleFormController {
    constructor($routeParams, $location, Article) {
        this.Article = Article;
        this.$location = $location;

        const articleID = $routeParams.id;
        this.article = articleID ? Article.get({id: articleID}) : new Article();
    }

    saveArticle() {
        this.article.$save()
            .then(() => this.$location.path('/article'))
    }
}

const articleFormDirective = function() {
    return {
        restrict: 'E',
        controller: ArticleFormController,
        controllerAs: 'vm',
        template: tpl
    }
};

export default articleFormDirective;
