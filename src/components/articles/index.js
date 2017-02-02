import tpl from './template.html';

class ArticlesController {
    constructor(articlesService, $scope) {
        this.articles = [];
        articlesService.getArticles()
            .then((articles) => {
                this.articles = articles;
                $scope.$apply()
            });
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
