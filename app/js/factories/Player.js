(function () {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Player', [function () {
        function Player(playerData) {
            if (playerData) {
                this.setData(playerData);
            }
        }

        Player.prototype = {
            genderIcon: function () {
                return (this.gender == 'male') ? "&#9792;" : "&#9794;";
            }
        };

        return Player;
    }]);
})();
