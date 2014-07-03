(function () {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('PlayerLocalStorage', [function() {
        return {
            store: function(updatedPlayer) {
                var players = JSON.parse(localStorage.getItem("players")) || [];

                // Find the player number
                var player = players.filter(function(el){
                    return el.number === updatedPlayer.number;
                })[0];

                var playerIndex = players.indexOf(player);

                if(playerIndex === -1)
                {
                    players.push(updatedPlayer);
                }
                else
                {
                    players[playerIndex] = updatedPlayer;
                }

                // Put in local storage
                localStorage.setItem("players", JSON.stringify(players));
            },
            get: function(number) {
                var players = JSON.parse(localStorage.getItem("players")) || [];

                var player = players.filter(function(el){
                    return el.number === number;
                }, this)[0];

                if(player)
                {
                    return player;
                }
            }
        };
    }]);
})();
