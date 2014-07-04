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

    app.controller('GameCtrl', ['Player', 'Question', function(Player, Question) {
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
            // Check if there is no active player
            if(this.getActivePlayer() == false) {
                // A random player starts
                var randomPlayerIndex = Math.floor(Math.random() * this.players.length);
                this.players[randomPlayerIndex].active = true;

                // Tell the player something has changed, so that it'll store it's new data
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

        // Retrieve the active player
        this.getActivePlayer = function() {
            return this.players.filter(function(player) {
                return (player.active)
            })[0];
        };

        // Pass the turn to next player
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

        // When a user selects an answer
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

        // Save the state of the game
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
