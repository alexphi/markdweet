'use strict';

/**
 * @ngdoc function
 * @name markdweet-app.controller:main-controller
 * @description
 * # main-controller
 * Controller of the markdweet-app
 */
angular.module('markdweet-app')
  .controller('main-controller', ['$scope', '$location', 'containerService', function ($scope, $location, containerService) {
    $scope.markdown = containerService.getContent()

    $scope.updateCount = function() {
      $scope.charCount = ($scope.markdown || '').length 
    }

    $scope.clear = function() {
      containerService.setContent('')
      $scope.markdown = containerService.getContent()
      
      $scope.updateCount()
    }

    $scope.continue = function() {
      containerService.setContent($scope.markdown)
      $location.path('/preview')
    }

    $scope.updateCount()
  }])
