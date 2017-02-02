import tpl from './template.html';

class ArticleFormController {
    constructor($routeParams, $location, Article) {
        this.Article = Article;
        this.$location = $location;

        const articleID = $routeParams.id;
        this.article = articleID ? Article.get({id: articleID}) : new Article();
    }

    saveArticle() {
        const data = this.article;
        if (data._id) {
            this.article.$save()
                .then(() => this.$location.path('/article'))
        } else {
            this.article.$save()
                .then(() => this.$location.path('/article'))
        }
    }
}

const articleFormComponent = {
    controller: ArticleFormController,
    controllerAs: 'vm',
    template: tpl
};

export default articleFormComponent;
