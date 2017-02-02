const articlesService = function() {
    return {
        getArticle(id){
            return new Promise(() => console.log('getArticle'));
        },

        getArticles(){
            console.log('getArticles');
        },

        saveArticle(data){
            console.log('saveArticle');
        },
    }
};

export default articlesService;
