import {module} from 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-messages';

import API from './constants/API';
import articleResource from './resources/articleResource'
import articlesComponent from './components/articles';
import articleAddBtnComponent from './components/articleAddBtn';
import articleFormDirective from './components/articleForm';
import txtMinLength from './components/validators/txtMinLength';

export default module('app', ['ngRoute', 'ngResource', 'ngMessages'])
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
    .directive('txtMinLength', txtMinLength)
    .constant('API', API)
    .name
;
