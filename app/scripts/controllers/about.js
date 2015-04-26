'use strict';

/**
 * @ngdoc function
 * @name trackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trackerApp
 */
angular.module('trackerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
