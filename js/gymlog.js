var App = angular.module('gymlog', ['mongolab','ngCookies']).
config(function($routeProvider) {
	$routeProvider.
		when('/list', {controller:ListCtrl, templateUrl:'partials/list.html'}).
		when('/new', {controller:NewCtrl, templateUrl:'partials/edit.html'}).
		when('/edit/:workoutId', {controller:EditCtrl, templateUrl:'partials/edit.html'}).
		when('/', {controller:WelcomeCtrl, templateUrl:'partials/welcome.html'}).
		otherwise({redirectTo:'/'});
});

App.user = {
	//username: "paul"
}

App.checkLoggedIn = function($location, $cookieStore) {
	App.user = $cookieStore.get("user");
	if (typeof(App.user.username) == "undefined") {
		console.log("not logged in redirecting");
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