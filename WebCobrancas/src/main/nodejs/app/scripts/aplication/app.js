/**
 * @ngdoc overview
 * @name webCobrancasApp
 * @description
 * # webCobrancasApp
 *
 * Main module of the application.
 */

 (function() {
    'use strict';

    angular
      .module('webCobrancasApp', [
        'webCobrancasApp.ctrlMain',        
        'webCobrancasApp.ctrlLogin',
        'webCobrancasApp.ctrlUsuario',
        'webCobrancasApp.ctrlBairro',
        'webCobrancasApp.ctrlLogradouros',
        'webCobrancasApp.factoryRepository',
        'webCobrancasApp.usuarioRepository',
        'webCobrancasApp.bairroRepository',
        'webCobrancasApp.rodapeDirective',
        'webCobrancasApp.arrowSortDirective',
        'webCobrancasApp.modalGeral',
        'webCobrancasApp.modalTemplate',
        'webCobrancasApp.filters',
        'webCobrancasApp.router',
        'ngAnimate',
        'ngCookies',
        'ngResource',        
        'ngSanitize',
        'ngTouch',
        'restangular',
        'ui.router',
        'ui.bootstrap',
        'notyModule'
      ])

      .config(['$stateProvider','$urlRouterProvider','RestangularProvider', 
        function($stateProvider, $urlRouterProvider, RestangularProvider) {

          $urlRouterProvider.otherwise("login");
        
          $stateProvider
            .state("main", {
              url: "/main",
              templateUrl: "views/main.html",
              controller: "ControllerMain",
              controllerAs: "cm"
            })

            .state("login", {
              url: "/login",
              templateUrl: "views/login.html",
              controller: "ControllerLogin",
              controllerAs: "cl"
            });

                   
          RestangularProvider.setBaseUrl('http://localhost:8080/app/api');

          RestangularProvider.setDefaultHeaders({ "X-Requested-With": "XMLHttpRequest"});

          RestangularProvider.setDefaultHttpFields({withCredentials: false});

          //RestangularProvider.setRequestSuffix('!');
      }
    ]);

  }).call(this);
