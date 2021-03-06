(function() {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Player', ['PlayerLocalStorage', function(storage) { // injected storage as dependency
        var storage = storage;

        var defaults = {
            score: 0,
            active: false
        };

        function Player(props) {
            this.setData(defaults);

            if (props) {
                this.setData(props);
            }

            // If the player got a numer, try to retrieve the data from storage
            if (this.number) {
                this.setData(storage.get(this.number));
            }

        }

        Player.prototype = {
            setData: function(props) {
                angular.extend(this, props);
            },
            change: function() {
                storage.store(this);
            },
            resetScore: function() {
                this.score = 0;
                storage.store(this);
            }
        };

        Object.defineProperties(Player.prototype, {
            genderIcon: {
                get: function() {
                    return (this.gender == 'male') ? "&#9794;" : "&#9792;"; // Gender icons (mars/venus icons)
                }
            }
        });

        return Player;
    }]);

})();
