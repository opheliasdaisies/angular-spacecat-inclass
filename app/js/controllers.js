'use strict';

var spacecatControllers = angular.module("spacecatControllers", []);

spacecatApp.controller('CatListCtrl', ["$scope", "$http",
  function($scope, $http){

  $http.get('cats/cats.json').success(function(data){
    $scope.cats = data;
  });

  $scope.orderProp = "name";

}]);