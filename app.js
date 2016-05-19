var angular = require('angular');
var app = angular.module('myApp', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/state1");

  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html",
      controller: require('./components/controllers/test-controller')
    })
    .state('state2', {
      url: "/state2",
      data: {
          step: 2,
          name: "Hola"
      },
      templateUrl: "./partials/state2.html"
    })
    .state('state3', {
      url: "/state3",
      views: {
        "substate31": {
          templateUrl: "./partials/substate31.html"
        },
        "substate32": {
          templateUrl: "./partials/substate32.html"
        }
      }
    })
});
