(function () {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Player', [function() {
        function Player(props) {
            if (props) {
                this.setData(props);
            }

            if(this.number) {
                this.get(this.number);
            }

        }

        Player.prototype = {
            setData: function(props) {
                angular.extend(this, props);
            },
            change: function() {
                // Todo: Add some interval
                this.store();
            },
            store: function() {
                // Todo: Allow swapping of persistance layer

                var players = JSON.parse(localStorage.getItem("players")) || [];

                // Find the player number
                var player = players.filter(function(el){
                    return el.number === this.number;
                }, this)[0];

                var playerIndex = players.indexOf(player);

                if(playerIndex === -1)
                {
                    players.push(this);
                }
                else
                {
                    players[playerIndex] = this;
                }

                // Put in local storage
                localStorage.setItem("players", JSON.stringify(players));
            },
            get: function() {
                var players = JSON.parse(localStorage.getItem("players")) || [];

                var player = players.filter(function(el){
                    return el.number === this.number;
                }, this)[0];

                if(player)
                {
                    this.setData( player );
                }
            }
        };

        Object.defineProperties(Player.prototype, {
           genderIcon: {
               get: function(){
                   return (this.gender == 'male') ? "&#9794;" : "&#9792;";
               }
           }
        });

        return Player;
    }]);
})();
