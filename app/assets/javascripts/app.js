angular.module('bigMoon', 
	[
		'ngRoute', 
		'ngCookies'
	])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeController',
				templateUrl: '/templates/home.html'
			})
			.when('/login', {
				controller: 'LoginController',
				templateUrl: '/templates/login.html'
			})
			.when('/signup', {
				controller: 'SignupController',
				templateUrl: '/templates/signup.html'
			})
			.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode(true);
	});