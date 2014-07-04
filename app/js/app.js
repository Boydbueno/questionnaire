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
        'ngCookies',
        'ngRoute',
        'ngSanitize'
    ])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .otherwise({
                templateUrl: 'js/game/game.html',
                controller: 'GameCtrl'
            });
    });
