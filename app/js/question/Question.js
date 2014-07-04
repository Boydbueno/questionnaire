(function() {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Question', [function() {

        var defaults = {
            flipped: false
        };

        function Question(props) {
            this.setData(defaults);

            if (props) {
                this.setData(props);
            }
        }

        Question.prototype = {
            setData: function(props) {
                angular.extend(this, props);
            },
            flip: function() {
                this.flipped = !this.flipped;
            }
        };

        return Question;
    }]);
})();
