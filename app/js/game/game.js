(function () {

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
            new Player({number: 1}),
            new Player({number: 2})
        ];

        this.questions = {
          draws: []
        };

        this.start = function () {
            // Todo: Set random player as starting player
            this.players[0].active = true;
        };

        this.newQuestions = function(difficulty){
            console.log(difficulty);
            this.questions.draws = [
                {
                    question: "This is a math question",
                    category: "math"
                },
                {
                    question: "This is a game question",
                    category: "games"
                },
                {
                    question: "This is a music question",
                    category: "music"
                }
            ];
        };

        this.reset = function () {
            foreach.players(function (player) {
                player.resetScore();
            });
        };

    }]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/game', {
                templateUrl: '/js/game/game.html',
                controller: 'GameCtrl'
            })
            .when('/game/play', {
                templateUrl: '/js/game/play.html',
                controller: 'GameCtrl'
            });
    });

})();
