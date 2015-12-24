(function () {
    'use strict';

    angular.module('www', [
        'ngRoute'
        //, 'angular.filter'
        //, 'mega-menu'
        //, 'angularUtils.directives.dirPagination'
        //, 'constructables.project-summary.directives'
        , 'www.home.controllers'
        //, 'constructables.project-summary.controllers'

    ])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/home.html',
                activeNav: 'home'
            });

            $routeProvider.when('/about', {
                controller: 'AboutController',
                templateUrl: 'views/about.html',
                activeNav: 'about'
            });

            $routeProvider.when('/career', {
                controller: 'CareerController',
                templateUrl: 'views/career.html',
                activeNav: 'career'
            });
            $routeProvider.when('/contact', {
                controller: 'ContactController',
                templateUrl: 'views/contact.html',
                activeNav: 'contact'
            });

            $routeProvider.when('/skills', {
                controller: 'SkillsController',
                templateUrl: 'views/skills.html',
                activeNav: 'skills'
            });

            $routeProvider.when('/portfolio', {
                controller: 'PortfolioController',
                templateUrl: 'views/portfolio.html',
                activeNav: 'portfolio'
            });

            $routeProvider.otherwise({
                redirectTo: '/home'
            });

        }]);

    angular.module('www.home.controllers', [])
    //angular.module('constructables.project-summary.controllers', ['constructables.project-summary.services'])
    //angular.module('constructables.project-summary.controllers', ['constructables.project-summary.services'])
    //angular.module('constructables.project-summary.directives', [])
    //angular.module('constructables.project-summary.services', [])


})();