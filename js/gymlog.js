var App = {
	user: {
	}
};

angular.module('gymlog', ['mongolab']).
config(function($routeProvider) {
	$routeProvider.
	when('/list', {controller:ListControl, templateUrl:'partials/list.html'}).
	when('/new', {controller:NewControl, templateUrl:'partials/new.html'}).
	when('/welcome', {controller:WelcomeCtrl, templateUrl:'partials/welcome.html'}).
	otherwise({redirectTo:'/welcome'});
});

function ListControl($scope, Log) {
	$scope.workouts = Log.query();
}

function NewControl($scope, $location, Log) {
	var workout = {};
	allWorkouts.push(workout);
	$scope.workout = workout;
	$scope.save = function() {
		Log.save(workout, function(){
			$location.path("/");
		});
	}
}

function WelcomeCtrl($scope, $location) {
	$scope.user = App.user;
	$scope.submit = function() {
		$location.path("/list");
	}
}