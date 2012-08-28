function ListCtrl($scope, $location, WorkoutResource) {
	checkLoggedIn($location);
	$scope.workouts = WorkoutResource.find({q:'{"user":"'+App.user.username+'","deleted":false}'});
	$(".addEntry").css('display','inline-block');

	$scope.dateString = function(workout) {
    return new Date(workout.date).toString("yyyy/M/d");
  }
}