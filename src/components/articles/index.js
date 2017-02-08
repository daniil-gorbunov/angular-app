import tpl from './template.html';

class ArticlesController {
    constructor(Article) {
        this.articles = Article.query();
    }
}

const articlesComponent = {
    controller: ArticlesController,
    controllerAs: 'vm',
    template: tpl
};

export default articlesComponent;
