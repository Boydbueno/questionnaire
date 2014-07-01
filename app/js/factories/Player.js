(function(){
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Player', [function() {
        function Player(playerData) {
            if(playerData) {
                this.setData(playerData);
            }
        }

        return Player;
    }]);
})();
