function ListCtrl($scope, $location, WorkoutResource, $http, UserStore) {
	App.checkLoggedIn($location, UserStore);
	$scope.workouts = WorkoutResource.find({q:'{"user":"'+UserStore.get().username+'","deleted":false}'});
	$(".addEntry").css('display','inline-block');

	$scope.dateString = function(workout) {
    return new Date(workout.date).toString("yyyy/M/d");
  }
}