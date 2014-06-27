'use strict';

/**
 * @ngdoc function
 * @name cardGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cardGameApp
 */
angular.module('cardGameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
