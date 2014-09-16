angular.module('bigMoon').controller('LoginController', function($scope, $location, UserService) {
	$scope.signup = {};
	$scope.login = {};

	UserService.currentUser().then(function(user) {
		$scope.user = user;
	})

	$scope.submitLogin = function() {
		UserService.login($scope.login.email).then(function(user) {
			$scope.user = user;
			$location.path('/');
		});
	};
});