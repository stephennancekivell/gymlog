function NewCtrl($scope, $location, WorkoutResource, $cookieStore) {
	App.checkLoggedIn($location, $cookieStore);
	$scope.dateString = longDateString;
	$scope.workout = new WorkoutResource({
		user:App.user.username,
		deleted:false
	});
	$scope.save = function() {
		$scope.workout.date = new Date();
		$scope.workout.$save(function(){
			$location.path("/list");
		});
	}
}