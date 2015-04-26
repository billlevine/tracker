'use strict';

/**
 * @ngdoc function
 * @name trackerApp.controller:EwoCtrl
 * @description
 * # EwoCtrl
 * Controller of the trackerApp
 */
angular.module('trackerApp')
  .controller('EwoCtrl', function ($scope, $http) {
 
		$http.get('http://0.0.0.0:3000/ewos.json')
			.success(function(data) {
				$scope.ewos = data;
			});


	});
