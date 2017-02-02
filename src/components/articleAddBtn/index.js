import tpl from './template.html';

class ArticlesAddBtnController {
    constructor(articlesService){
        this.articlesService = articlesService;
    }
    
    click() {
        this.articlesService.getArticles();
    }
}


const articlesAddBtnComponent = {
    controller: ArticlesAddBtnController,
    controllerAs: 'vm',
    template: tpl
};

export default articlesAddBtnComponent;
