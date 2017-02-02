const articlesService = function () {
    return {
        getArticle(id){
            return new Promise(function (resolve, reject) {
                resolve({
                    id: id,
                    title: 'Test Article',
                    description: 'Some description of test article',
                    content: 'Here goes long test content of a long and interesting test article ...',
                    tags: ['test', 'article', 'nobodyReadsTags']
                });
            });
        },

        getArticles() {
            return new Promise(function (resolve, reject) {
                resolve([{
                    id: 1,
                    title: 'Test Article 1',
                    description: 'Some description of test article',
                    content: 'Here goes long test content of a long and interesting test article ...',
                    tags: ['test', 'article', 'nobodyReadsTags']
                }, {
                    id: 2,
                    title: 'Test Article 2',
                    description: 'Some description of test article',
                    content: 'Here goes long test content of a long and interesting test article ...',
                    tags: ['test', 'article', 'nobodyReadsTags']
                }, {
                    id: 3,
                    title: 'Test Article 3',
                    description: 'Some description of test article',
                    content: 'Here goes long test content of a long and interesting test article ...',
                    tags: ['test', 'article', 'nobodyReadsTags']
                }, {
                    id: 4,
                    title: 'Test Article 4',
                    description: 'Some description of test article',
                    content: 'Here goes long test content of a long and interesting test article ...',
                    tags: ['test', 'article', 'nobodyReadsTags']
                }]);
            });
        },

        saveArticle(data){
            console.log('saveArticle');
        },
    }
};

export default articlesService;
