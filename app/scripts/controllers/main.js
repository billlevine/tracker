'use strict';

/**
 * @ngdoc function
 * @name trackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackerApp
 */
angular.module('trackerApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
	$scope.todo = '';
	$scope.placeholder = 'What needs to get done?';
	
	var todosInStore = localStorageService.get('todos');
	$scope.todos = todosInStore || [];
	$scope.$watch('todos', function() {
		localStorageService.set('todos', $scope.todos);
		}, true);
	
	$scope.addTodo = function() {
		if ($scope.todos.indexOf($scope.todo) > -1)
		{
			$scope.placeholder='Sorry, try something else';
			$scope.todo= '';

		}else{
			$scope.todos.push($scope.todo);
			$scope.todo= '';
			$scope.placeholder='What else?';
		}
	};

	$scope.removeTodo = function($index){
		$scope.todos.splice($index, 1);
		};
});
