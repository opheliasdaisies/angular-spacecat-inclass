'use strict';

var spacecatApp = angular.module("spacecatApp", [
  "ngRoute",
  "spacecatControllers"
  ]);

spacecatApp.config(["$routeProvider",
  function($routeProvider){
    $routeProvider.
    when("/cats", {
      templateUrl: "partials/cat-list.html",
      controller: "CatListCtrl"
    })
  }]);