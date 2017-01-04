'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/recommended');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('details', {
      url: '/datails/:id',
      templateUrl: 'main/templates/details.html',
      controller: 'DetailsCtrl',
      controllerAs: 'vm'
    })
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.recommended', {
        url: '/recommended',
        views: {
          'tab-recommended': {
            templateUrl: 'main/templates/recommended.html',
            controller: 'RecommendedCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'main/templates/search.html',
            controller: 'SearchCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.favorites', {
        url: '/favorites',
        views: {
          'tab-favorites': {
            templateUrl: 'main/templates/favorites.html',
            controller: 'FavoritesCtrl',
            controllerAs: 'vm'
          }
        }
      });
});
