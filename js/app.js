var pomerleauApp = angular.module('pomerleauApp', ['ui.router']);

pomerleauApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: '/partials/home.html'
        })
        
        .state('civil-infrastructure', {
            url: '/civil-infrastructure',
            templateUrl: '/partials/civil-infrastructure.html'
        })
        
        .state('buildings', {
            url: '/buildings',
            templateUrl: '/partials/buildings.html'
        })
        
        .state('projects', {
            url: '/projects',
            templateUrl: '/partials/projects.html'
        })
        
        .state('competencies', {
            url: '/competencies',
            templateUrl: '/partials/competencies.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: '/partials/about.html'
        });
});
