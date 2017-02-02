import {module} from 'angular';
import 'angular-route';
import 'angular-resource';

import API from './constants/API';
import articleResource from './resources/articleResource'
import articlesComponent from './components/articles';
import articleFormComponent from './components/articleForm';
import articleAddBtnComponent from './components/articleAddBtn';

export default module('app', ['ngRoute', 'ngResource'])
    .factory('Article', articleResource)
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: 'Hello, Dudes!11'
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
    .constant('API', API)
    .name
;
