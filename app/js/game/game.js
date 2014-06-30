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

    app.controller('GameCtrl', function() {
        this.cards = cards;
    })
        .config(function($routeProvider) {
            $routeProvider
                .when('/game', {
                    templateUrl: 'js/game/game.html',
                    controller: 'GameCtrl'
                });
        });

    var cards = [
        {
            question: "Are we human?",
            category: "Weird",
            answers: [
                { answer: "Hell no!" },
                { answer: "Ofcourse we are!" },
                { answer: "Nop, we're dancer.", correct: true }
            ]
        },
        {
            question: "What is equal to 1+1?",
            category: "Math",
            answers: [
                { answer: "11!" },
                { answer: "4-2!", correct: true },
                { answer: "3" }
            ]
        }
    ];

})();
