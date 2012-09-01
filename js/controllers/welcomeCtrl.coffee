angular.module('gymlog').controller 'WelcomeCtrl', ($scope, $location, UserStore) ->
	$scope.user = UserStore.get()

	$scope.$watch 'user.username', () =>
		UserStore.put($scope.user);

	$scope.submit = () =>
		$location.path("/list")