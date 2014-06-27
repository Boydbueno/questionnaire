'use strict';

/**
 * @ngdoc function
 * @name cardGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardGameApp
 */
angular.module('cardGameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
