import {module} from 'angular';
import 'angular-route';

import articlesService from './services/articlesService';
import articlesComponent from './components/articles';
import articleFormComponent from './components/articleForm';
import articleAddBtnComponent from './components/articleAddBtn';

export default module('app', ['ngRoute'])
    .factory('articlesService', [articlesService])
    .controller('ArticlesController', function($scope, articlesService) {
        $scope.name = 'BookController';
        $scope.click = articlesService.getArticles();
    })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: 'Hello, Dudes!'
            })
            .when('/article', {template: '<articles-component></articles-component>'})
            .when('/article/:id/edit', {template: '<article-form-component></article-form-component>'})
            .when('/article/add', {template: '<article-form-component></article-form-component>'})
        ;
        $locationProvider.html5Mode(true)
    })
    .component('articlesComponent', articlesComponent)
    .component('articleFormComponent', articleFormComponent)
    .component('articleAddBtnComponent', articleAddBtnComponent)
    .name
;
