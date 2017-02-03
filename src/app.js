import {module} from 'angular';
import 'angular-route';
import 'angular-resource';

import API from './constants/API';
import articleResource from './resources/articleResource'
import articlesComponent from './components/articles';
import articleFormDirective from './components/articleForm';
import articleAddBtnComponent from './components/articleAddBtn';

export default module('app', ['ngRoute', 'ngResource'])
    .factory('Article', articleResource)
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: 'Hello, Dudes!11'
            })
            .when('/article', {template: '<articles-component></articles-component>'})
            .when('/article/add', {template: '<article-form-directive></article-form-directive>'})
            .when('/article/:id/edit', {template: '<article-form-directive></article-form-directive>'})
        ;
        $locationProvider.html5Mode(true)
    })
    .component('articlesComponent', articlesComponent)
    .component('articleAddBtnComponent', articleAddBtnComponent)
    .directive('articleFormDirective', articleFormDirective)
    .constant('API', API)
    .name
;
