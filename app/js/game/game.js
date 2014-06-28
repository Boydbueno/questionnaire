'use strict';

/**
 * @ngdoc function
 * @name cardGameApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the cardGameApp
 */
var app = angular.module('cardGameApp');

app.controller('GameCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
})
    .config(function ($routeProvider) {
        $routeProvider
            .when('/game', {
                templateUrl: 'js/game/game.html',
                controller: 'AdminCtrl'
            });
    });
