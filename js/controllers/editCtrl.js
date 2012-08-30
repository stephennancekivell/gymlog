function EditCtrl($scope, $location, $routeParams, WorkoutResource, UserStore){
	App.checkLoggedIn($location, UserStore);
	$scope.workout = WorkoutResource.get({id:$routeParams.workoutId});
	$scope.dateString = longDateString;

	$scope.save = function(){
		$scope.workout.update(function(){
			$location.path("/list");
		});
	}
	$scope.delete = function() {
		$scope.workout.deleted = true;
		$scope.workout.update(function(){
			$location.path("/list");
		});
	};
}