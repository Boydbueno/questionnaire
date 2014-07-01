(function(){
    "use strict";

    var app = angular.module("cardGameApp");

    app.filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    });
})();
