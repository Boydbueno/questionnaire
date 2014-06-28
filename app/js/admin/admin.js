'use strict';

/**
 * @ngdoc function
 * @name cardGameApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the cardGameApp
 */
var app = angular.module('cardGameApp');

app.controller('AdminCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
})
    .config(function ($routeProvider) {
        $routeProvider
            .when('/admin', {
                templateUrl: 'js/admin/admin.html',
                controller: 'AdminCtrl'
            });
    });
