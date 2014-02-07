'use strict';

var spacecatApp = angular.module("spacecatApp", []);

spacecatApp.controller('CatListCtrl', function($scope){
  $scope.cats = [
    { "id": 1,
      "name": "bigbelly",
      "bio": "Emerged into consciousness how far away shores of the cosmic ocean Cambrian explosion",
      "color": "white",
      "personality": "relaxed",
      "planets": 2},
    { "id": 2,
      "name": "keyboard",
      "bio": "decipherment from which we spring tendrils of gossamer clouds quasar ship of the imagination rings of Uranus",
      "color": "grey",
      "personality": "nervous",
      "planets": 45},
    { "id": 3,
      "name": "laser",
      "bio": "stirred by starlight, gathered by gravity worldlets Jean-François Champollion at the edge of forever billions",
      "color": "grey",
      "personality": "aggresive",
      "planets": 666},
    { "id": 4,  
      "name": "lounge",
      "bio": "Flatland not a sunrise but a galaxyrise emerged into consciousness a mote of dust suspended in a sunbeam globular star cluster",
      "color": "grey",
      "personality": "relaxed",
      "planets": 1},
    { "id": 5,
      "name": "ohno",
      "bio": "Euclid preserve and cherish that pale blue dot Jean-François Champollion network of wormholes",
      "color": "orange",
      "personality": "nervous",
      "planets": 1337},
    { "id": 6,
      "name": "yucky",
      "bio": "The only home we've ever known dream of the mind's eye, prime number.",
      "color": "brown",
      "personality": "relaxed",
      "planets": 7}
  ]
});