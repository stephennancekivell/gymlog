angular.module('gymlog').controller 'EditCtrl', ($scope, $location, $routeParams, WorkoutResource, UserStore) ->
	App.checkLoggedIn($location, UserStore)
	$scope.workout = WorkoutResource.get({id:$routeParams.workoutId})
	$scope.dateString = longDateString

	$scope.save = () ->
		$scope.workout.update () ->
			$location.path("/list")

	$scope.delete = () ->
		$scope.workout.deleted = true
		$scope.workout.update () ->
			$location.path("/list")