/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var app = angular.module('myApp', [
	  ui.router,
	  __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	]);

	app.config(function($stateProvider, $urlRouterProvider) {

	  $urlRouterProvider.otherwise("/state1");

	  $stateProvider
	    .state('state1', {
	      url: "/state1",
	      templateUrl: "partials/state1.html",
	      controller: "TestController"
	    })
	    .state('state2', {
	      url: "state2",
	      data: {
	          step: 2,
	          name: "Hola"
	      },
	      templateUrl: "partials/state2.html"
	    })
	    .state('state3', {
	      url: "state3",
	      views: {
	        "substate31": {
	          templateUrl: "partials/substate31.html"
	        },
	        "substate32": {
	          templateUrl: "partials/substate32.html"
	        }
	      }
	    })
	});


/***/ }
/******/ ]);