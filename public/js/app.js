var app = angular.module("SearchApp", 
			[
				'ngRoute',
				'ui.bootstrap',
				'app.controllers',
				'app.services'
			]
		);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl : "views/home.html",
		controller  : "SearchController"
	})
	.when('/:q', {
		templateUrl : "views/searchResult.html",
		controller  : "SearchResultController"
	})
	.otherwise({redirectTo:'/'});

	$locationProvider.html5Mode(true);
});