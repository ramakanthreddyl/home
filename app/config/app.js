var __isDevelopment = false;

if(window.location.host.indexOf('localhost') > -1){
	__isDevelopment = true;
}

var app=angular.module('cbLanding',['ui.router','picardy.fontawesome', 'seo','ngCookies']);

var serverURL = null, dashboardURL = null;

if(__isDevelopment){
	var serverURL="http://localhost:3000";	
	var dashboardURL = "http://localhost:1440";
}else{
	var serverURL="https://service.cloudboost.io";	
	var dashboardURL = "https://dashboard.cloudboost.io";	
}

app.config([  
    '$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

app.config(['$location', 
function($location) {
  $location.html5Mode(true);
}]);


