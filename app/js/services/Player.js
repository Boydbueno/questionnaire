(function () {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Player', [function () {
        function Player(props) {
            if (props) {
                this.setData(props);
            }
        }

        Player.prototype = {
            setData: function(props) {
                angular.extend(this, props);
            },
            genderIcon: function () {
                return (this.gender == 'male') ? "&#9794;" : "&#9792;";
            }
        };

        return Player;
    }]);
})();
