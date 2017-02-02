import tpl from './template.html';

class ArticleFormController {
    constructor(articlesService, $routeParams) {
        this.articleID = $routeParams.id;
        this.isNew = !$routeParams.id;
        this.articlesService = articlesService;
        if (this.isNew) {
            this.article = {
                id: null,
                title: '',
                description: '',
                content: '',
                tags: []
            };
        } else {
            this.articlesService.getArticle()
                .then((article) => this.article = article)
        }
    }
    
    saveArticle(){
        this.articlesService.saveArticle(this.article)
    }
}

const articleFormComponent = {
    controller: ArticleFormController,
    controllerAs: 'vm',
    template: tpl
};

export default articleFormComponent;
