(function(){
    "use strict";

    var app = angular.module("cardGameApp");

    app.directive('playerForm', function() {
        return {
            restrict: "E",
            templateUrl: "js/player/player-form.html"
        };
    });
})();
