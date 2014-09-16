angular.module('bigMoon').directive('userPanel', function() {
	return {
		templateUrl: '/templates/user_panel.html',
		controller: function($scope, UserService) {
			UserService.currentUser().then(function(user) {
				$scope.currentUser = user;
			});

			$scope.logout = function() {
				UserService.logout().then(function() {
					$scope.currentUser = null;
				});
			};
		}
	};
});