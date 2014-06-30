'use strict';

/**
 * @ngdoc function
 * @name cardGameApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the cardGameApp
 */
var app = angular.module('cardGameApp');

app.controller('AdminCtrl', function () {

})
    .config(function ($routeProvider) {
        $routeProvider
            .when('/admin', {
                templateUrl: 'js/admin/admin.html',
                controller: 'AdminCtrl'
            });
    });
