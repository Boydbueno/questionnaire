(function () {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Player', ['PlayerLocalStorage', function(storage) {
        var storage = storage;

        function Player(props) {
            if (props) {
                this.setData(props);
            }

            if(this.number) {
                this.setData( storage.get(this.number) );
            }

        }

        Player.prototype = {
            setData: function(props) {
                angular.extend(this, props);
            },
            change: function() {
                storage.store(this);
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