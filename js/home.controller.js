(function () {
    'use strict';


    angular.module('www.home.controllers')
        .controller('HomeController', ['$scope', function ($scope) {
            $scope.name = 'this is a test123';

        }])

        .controller('AboutController', ['$scope', function ($scope) {
            $scope.name = 'about3';

        }])

        .controller('CareerController', ['$scope', function ($scope) {
            $scope.name = 'career3';

        }])

        .controller('ContactController', ['$scope', function ($scope) {
            $scope.name = 'contact2';

        }])

        .controller('SkillsController', ['$scope', function ($scope) {
            $scope.name = 'skills';

        }])

        .controller('PortfolioController', ['$scope', function ($scope) {
            $scope.name = 'skills';

        }])

        .controller('NavController', ['$scope','$route', function ($scope,$route) {
            //$scope.activeNav = $route.current.activeNav;
            $scope.route = $route;
        }])



        .controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {
           // $scope.loadButonText="Load";
           $scope.feedSrc = "http://lennyreed.com/blog/feed.xml";


            $scope.loadFeed = function(){
                Feed.parseFeed($scope.feedSrc).then(function(res){
                    $scope.feeds=res.data.responseData.feed.entries;
                });
            }


            $scope.loadFeed();
        }])

        .factory('FeedService',['$http',function($http){
            return {
                parseFeed : function(url){
                    return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
                }
            }
        }]);
})();