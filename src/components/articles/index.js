import tpl from './template.html';

class ArticlesController {
    constructor(Article) {
        this.articles = Article.query();
    }

    getArticles(){
        return this.articles;
    }
}

const articlesComponent = {
    controller: ArticlesController,
    controllerAs: 'vm',
    template: tpl
};

export default articlesComponent;
