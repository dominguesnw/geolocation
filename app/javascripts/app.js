'use strict';

var tornadoNw = angular.module('tornadoNw', [
    'ngRoute',
    'tornadoNwController'
]);

tornadoNw.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'static/partials/intro.html',
            controller: 'IndexCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
