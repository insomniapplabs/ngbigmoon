angular.module('bigMoon').service('UserService', function($q, $cookieStore) {
	this._user = null;
			var service = this;

			this.login = function(email) {
				var d = $q.defer();
				var user = {
					email: email,
					id: 1
				};
				service._user = user;
				$cookieStore.put('user', user);
				d.resolve(user);
				return d.promise;
			}

			this.logout = function() {
				var d = $q.defer();
				service._user = null;
				$cookieStore.remove('user');
				d.resolve();
				return d.promise;
			}
			
			this.currentUser = function() {
				var d = $q.defer();
				if(service._user) {
					d.resolve(service._user);
				} else if($cookieStore.get('user')) {
					service._user = $cookieStore.get('user');
					d.resolve(service._user);
				} else {
					d.resolve(null);
				}
				return d.promise;
			}
});