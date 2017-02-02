import tpl from './template.html';

class ArticlesController {
    constructor(articlesService){
        this.articles = [];
        articlesService.getArticles()
            .then((articles) => this.articles = articles);
    }
}


const articlesComponent = {
    controller: ArticlesController,
    controllerAs: 'vm',
    template: tpl
};

export default articlesComponent;
