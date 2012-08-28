var App = {
	user: {
		//username: "paul"
	}
};

angular.module('gymlog', ['mongolab','ngCookies']).
config(function($routeProvider) {
	$routeProvider.
		when('/list', {controller:ListCtrl, templateUrl:'partials/list.html'}).
		when('/new', {controller:NewCtrl, templateUrl:'partials/edit.html'}).
		when('/edit/:workoutId', {controller:EditCtrl, templateUrl:'partials/edit.html'}).
		when('/', {controller:WelcomeCtrl, templateUrl:'partials/welcome.html'}).
		otherwise({redirectTo:'/'});
});

function ListCtrl($scope, $location, WorkoutResource) {
	checkLoggedIn($location);
	$scope.workouts = WorkoutResource.find({q:'{"user":"'+App.user.username+'","deleted":false}'});
	$(".addEntry").css('display','inline-block');

	$scope.dateString = function(workout) {
    return new Date(workout.date).toString("yyyy/M/d");
  }
}

function logDateString(workout){
	if (typeof workout.date == "undefined") {
		return "";
	} else{
		return new Date(workout.date).toString("yyyy/M/d HH:mm");
	}
}

function EditCtrl($scope, $location, $routeParams, WorkoutResource){
	$scope.workout = WorkoutResource.get({id:$routeParams.workoutId});
	$scope.dateString = logDateString;

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
	checkLoggedIn($location);
	$scope.dateString = logDateString;
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

function WelcomeCtrl($scope, $location, $cookieStore) {
	App.user = $cookieStore.get("user");
	$scope.user = App.user;

	$scope.$watch('user.username', function() {
		$cookieStore.put("user", $scope.user);
		console.log("put");
	});

	$scope.submit = function() {
		$location.path("/list");
	}
}

function checkLoggedIn($location){
	if (typeof(App.user.username) == "undefined") {
		$location.path("/");
	}
}