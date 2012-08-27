var App = {
	user: {
		username: "paul"
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
	$scope.workouts = WorkoutResource.find({q:'{"user":"'+App.user.username+'","deleted":false}'});
	$(".addEntry").css('display','inline-block');
}

function EditCtrl($scope, $location, $routeParams, WorkoutResource){
	$scope.workout = WorkoutResource.get({id:$routeParams.workoutId});

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

function NewCtrl($scope, $location, WorkoutResource) {
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

function WelcomeCtrl($scope, $location) {
	$scope.user = App.user;
	if (typeof(App.user.username) != "undefined") {
		$location.path("/list");
	}
	$scope.submit = function() {
		$location.path("/list");
	}
}