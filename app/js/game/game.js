'use strict';

/**
 * @ngdoc function
 * @name cardGameApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the cardGameApp
 */
var app = angular.module('cardGameApp');

app.controller('GameCtrl', function () {

})
    .config(function ($routeProvider) {
        $routeProvider
            .when('/game', {
                templateUrl: 'js/game/game.html',
                controller: 'GameCtrl'
            });
    });
