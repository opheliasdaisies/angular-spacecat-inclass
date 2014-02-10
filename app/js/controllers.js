'use strict';

spacecatApp.controller('CatListCtrl', function($scope, $http){

  $http.get('cats/cats.json').success(function(data){
    $scope.cats = data;
  });

  $scope.orderProp = "name";

});