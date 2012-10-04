function NewCtrl($scope, $location, WorkoutResource, UserStore) {
	App.checkLoggedIn($location,UserStore);
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