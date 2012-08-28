function WelcomeCtrl($scope, $location, $cookieStore) {
	App.user = $cookieStore.get("user");
	$scope.user = App.user;

	$scope.$watch('user.username', function() {
		$cookieStore.put("user", $scope.user);
	});

	$scope.submit = function() {
		$location.path("/list");
	}
}