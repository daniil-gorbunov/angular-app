import {module} from 'angular';
import 'angular-route';

export default module('app', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: 'Hello, Dudes!'
            })
        ;
        $locationProvider.html5Mode(true)
    })
    .name
;
