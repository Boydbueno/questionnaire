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
    .module('cardGameApp', [ // Dependencies
        'ngCookies',
        'ngRoute',
        'ngSanitize'
    ])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true); // html5 mode for routing (no hashbangs)
        $routeProvider
            .otherwise({ // Fallback route
                templateUrl: 'js/game/game.html',
                controller: 'GameCtrl'
            });
    });
