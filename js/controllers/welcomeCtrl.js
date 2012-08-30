function WelcomeCtrl($scope, $location, UserStore) {
	$scope.user = UserStore.get();

	$scope.$watch('user.username', function() {
		UserStore.put($scope.user);
	});

	$scope.submit = function() {
		$location.path("/list");
	}
}