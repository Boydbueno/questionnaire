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

    app.controller('GameCtrl', ['Player', 'Question', '$http', function(Player, Question, $http) {
        // Todo: Let a setting decide the amount of players
        this.players = [
            new Player({number: 1}),
            new Player({number: 2})
        ];

        this.toolbar = {
            disabled: false
        };

        this.questions = [];

        this.start = function() {
            // Todo: Set random player as starting player
            this.players[0].active = true;
        };

        this.newQuestions = function(difficulty) {
            // Get random questions (mocked now)
            var question = new Question();

            question.getQuestions(difficulty, function(questions) {
                this.questions = questions;
            }, this);

            // Disable the difficulty select buttons
            this.disableToolbar();
        };

        this.chooseQuestion = function(question) {
            question.flip();
            this.questions.draws = [question];
        }

        this.disableToolbar = function() {
            this.toolbar.disabled = true;
        };

        this.reset = function() {
            forEach.players(function(player) {
                player.resetScore();
            });
        };

    }]);

    app.config(function($routeProvider) {
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
