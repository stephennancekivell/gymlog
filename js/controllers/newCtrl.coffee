angular.module('gymlog').controller 'NewCtrl', ($scope, $location, WorkoutResource, UserStore) ->
	App.checkLoggedIn($location,UserStore)
	$scope.dateString = longDateString
	$scope.workout = new WorkoutResource({
		user:App.user.username,
		deleted:false
		})

	$scope.save = () ->
		$scope.workout.date = new Date()
		$scope.workout.$save () ->
			$location.path "/list"