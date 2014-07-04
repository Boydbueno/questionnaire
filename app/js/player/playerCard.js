(function(){
    "use strict";

    var app = angular.module("cardGameApp");

    app.directive('playerCard', function() {
       return {
           restrict: "E",
           templateUrl: "/js/player/player-card.html"
       };
    });
})();
