'use strict';

/**
 * @ngdoc overview
 * @name trackerApp
 * @description
 * # trackerApp
 *
 * Main module of the application.
 */
angular
  .module('trackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	 'ui.sortable',
	 'LocalStorageModule',
	 'ngResource'
  ])
	.config(['localStorageServiceProvider', function(localStorageServiceProvider){
		localStorageServiceProvider.setPrefix('ls');
	}])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/ewo', {
        templateUrl: 'views/ewo.html',
        controller: 'EwoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
