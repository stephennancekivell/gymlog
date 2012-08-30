function ListCtrl($scope, $location, WorkoutResource, $http, $cookieStore) {
	App.checkLoggedIn($location, $cookieStore);
	$scope.workouts = WorkoutResource.find({q:'{"user":"'+App.user.username+'","deleted":false}'});
	$(".addEntry").css('display','inline-block');

	$scope.dateString = function(workout) {
    return new Date(workout.date).toString("yyyy/M/d");
  }
}