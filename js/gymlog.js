var App = {
	user: {
	}
};

angular.module('gymlog', ['mongolab']).
config(function($routeProvider) {
	$routeProvider.
	when('/list', {controller:ListCtrl, templateUrl:'partials/list.html'}).
	when('/new', {controller:NewCtrl, templateUrl:'partials/new.html'}).
	when('/edit', {controller:EditCtrl, templateUrl:'partials/new.html'}).
	when('/welcome', {controller:WelcomeCtrl, templateUrl:'partials/welcome.html'}).
	otherwise({redirectTo:'/welcome'});
});

function ListCtrl($scope, LogResource) {
	$scope.workouts = LogResource.query();
}

function EditCtrl($scope, $location, LogResource){
	var self = this; //what does this do.

	LogResource.query(function(data){
		$scope.workout = new LogResource(data[0]);
	});

	$scope.save = function(){
		$scope.workout.update(function(){
			$location.path("/list");
		});
	}
}

function NewCtrl($scope, $location, LogResource) {
	var workout = {user:App.user.username};
	$scope.workout = workout;
	$scope.save = function() {
		LogResource.save(workout, function(){
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