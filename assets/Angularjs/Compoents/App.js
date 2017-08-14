var app =  angular.module("myApp", ["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
// $urlRouterProvider.otherwise('','/');

    $stateProvider
        .state("home", {
            url:"/login",
            templateUrl : "pages/Desktop/home.html"
        })
        .state("aboutUs", {
            url:"/aboutUs",
            templateUrl : "pages/Desktop/about.html"
        })
        .state("contactUs", {
            url:"/contactUs",
            templateUrl : "pages/Desktop/contact.html"
        })
        .state("login", {
            url:"/contactUs",
            templateUrl : "pages/Desktop/login.html"
        })
        .state("home.test1", {
            url:"/test1",
            templateUrl : "pages/Desktop/test1.html"
        })
        .state("home.test2", {
            url:"/test2",
            templateUrl : "pages/Desktop/test2.html"
        })
    $locationProvider.html5Mode(true).hashPrefix('!');

});
