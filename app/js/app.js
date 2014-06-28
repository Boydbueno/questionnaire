'use strict';

/**
 * @ngdoc overview
 * @name cardGameApp
 * @description
 * # cardGameApp
 *
 * Main module of the application.
 */
angular
    .module('cardGameApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .otherwise({
                templateUrl: 'js/game/game.html',
                controller: 'GameCtrl'
            });
    });
