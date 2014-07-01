(function() {

    'use strict';

    /**
     * @ngdoc function
     * @name cardGameApp.controller:GameCtrl
     * @description
     * # GameCtrl
     * Controller of the cardGameApp
     */
    var app = angular.module('cardGameApp');

    app.controller('GameCtrl', ['Player', function(Player) {
        // Todo: Let a setting decide the amount of players
        this.players = [
            new Player(),
            new Player()
        ];
    }]);

    app.config(function($routeProvider) {
            $routeProvider
                .when('/game', {
                    templateUrl: 'js/game/game.html',
                    controller: 'GameCtrl'
                });
        });

})();
