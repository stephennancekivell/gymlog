var App = {
	user: {
	}
};

angular.module('gymlog', ['mongolab']).
config(function($routeProvider) {
	$routeProvider.
	when('/list', {controller:ListCtrl, templateUrl:'partials/list.html'}).
	when('/new', {controller:NewCtrl, templateUrl:'partials/new.html'}).
	when('/edit/:workoutId', {controller:EditCtrl, templateUrl:'partials/new.html'}).
	when('/welcome', {controller:WelcomeCtrl, templateUrl:'partials/welcome.html'}).
	otherwise({redirectTo:'/welcome'});
});

function ListCtrl($scope, WorkoutResource) {
	$scope.workouts = WorkoutResource.query();
}

function EditCtrl($scope, $location, $routeParams, WorkoutResource){
	WorkoutResource.get({id:$routeParams.workoutId}, function(data){
		$scope.workout = new WorkoutResource(data);
	})

	$scope.save = function(){
		$scope.workout.update(function(){
			$location.path("/list");
		});
	}
}

function NewCtrl($scope, $location, WorkoutResource) {
	$scope.workout = new WorkoutResource({user:App.user.username});
	$scope.save = function() {
		$scope.workout.$save(function(){
			$location.path("/list");
		});
	}
}

function WelcomeCtrl($scope, $location) {
	$scope.user = App.user;
	$scope.submit = function() {
		$location.path("/list");
	}
}