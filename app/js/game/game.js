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
        // Setup two players
        this.players = [
            new Player({number: 1}),
            new Player({number: 2})
        ];

        // The toolbar is enabled by default
        this.toolbar = {
            disabled: false
        };

        // The array that will be storing all question objects
        this.questions = [];

        // Start the game
        this.start = function() {
            // Todo: Set random player as starting player

            // Check if there is no active player
            if(this.getActivePlayer() == false) {
                // A random player starts
                var randomPlayerIndex = Math.floor(Math.random() * this.players.length);
                this.players[randomPlayerIndex].active = true;

                this.players[randomPlayerIndex].change();
            }

        };

        // This is called when a difficulty button is clicked.
        this.newQuestions = function(difficulty) {
            var question = new Question();

            question.getQuestions(difficulty, function(questions) {
                this.questions = questions;
            }, this);

            // Disable the difficulty select buttons
            this.disableToolbar();
        };

        // When a question has been chosen
        this.chooseQuestion = function(question) {
            question.flip();
            this.questions = [question];
        }

        this.disableToolbar = function() {
            this.toolbar.disabled = true;
        };

        this.enableToolbar = function() {
            this.toolbar.disabled = false;
        };

        this.getActivePlayer = function() {
            return this.players.filter(function(player) {
                return (player.active)
            })[0];
        };

        this.nextPlayerTurn = function() {
            var currentPlayer = this.getActivePlayer();
            currentPlayer.active = false;
            var index = this.players.indexOf(currentPlayer);

            if(this.players[index + 1])
            {
                this.players[index + 1].active = true;
            }
            else
            {
                this.players[0].active = true;
            }
        };

        this.answerSelected = function(answer) {
            if(answer.correct) {
                var index = this.players.indexOf(this.getActivePlayer());
                this.players[index].score += 10;
            }

            this.questions = [];
            this.enableToolbar();
            this.nextPlayerTurn();
            this.save();
        };

        this.save = function() {
            this.players.forEach(function(player) {
                player.change();
            });
        }

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
