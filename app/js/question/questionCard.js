(function(){
    "use strict";

    var app = angular.module("cardGameApp");

    app.directive('questionCard', function() {
        return {
            restrict: "E",
            templateUrl: "/js/question/question-card.html"
        };
    });
})();
