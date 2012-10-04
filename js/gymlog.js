var App = angular.module('gymlog', ['mongolab']).
config(function($routeProvider) {
	$routeProvider.
		when('/list', {controller:ListCtrl, templateUrl:'partials/list.html'}).
		when('/new', {controller:NewCtrl, templateUrl:'partials/edit.html'}).
		when('/edit/:workoutId', {controller:EditCtrl, templateUrl:'partials/edit.html'}).
		when('/', {controller:WelcomeCtrl, templateUrl:'partials/welcome.html'}).
		otherwise({redirectTo:'/'});
});

App.checkLoggedIn =  function($location, UserStore) {
	App.user = UserStore.get();
	if (typeof(App.user.username) == "undefined") {
		$location.path("/");
	}
}

// util methods.
function longDateString(workout){
	if (typeof workout.date == "undefined") {
		return "";
	} else{
		return new Date(workout.date).toString("yyyy/M/d HH:mm");
	}
}