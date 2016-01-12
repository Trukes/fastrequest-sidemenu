// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.utils'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

// os novos
 
  .state('start', {
    url: '/start',
	templateUrl: 'templates/start.html',
    controller: 'StartCtrl'      
    })   
    
// ENTRADAS
  .state('app.entradas', {
    url: '/entradas',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-entradas.html',
        controller: 'EntradasCtrl'
      }
    }
  })
  
	.state('app.entradas-detail', {
	  url: '/entradas/:entradasId',
	  views: {
	    'menuContent': {
	      templateUrl: 'templates/entradas-detail.html',
	      controller: 'EntradasDetailCtrl'
	    }
	  }
	})  
  
  // !ENTRADAS
  
  // REFEIÇÕES
  
   .state('app.refeicoes', {
    url: '/refeicoes',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-refeicoes.html',
        controller: 'RefeicoesCtrl'
      }
    }
  })
  
	.state('app.refeicoes-detail', {
	  url: '/refeicoes/:refeicoesId',
	  views: {
	    'menuContent': {
	      templateUrl: 'templates/refeicoes-detail.html',
	      controller: 'RefeicoesDetailCtrl'
	    }
	  }
	})   
  
  // !REFEIÇÕES
  
  // BEBIDAS
  
   .state('app.bebidas', {
    url: '/bebidas',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-bebidas.html',
        controller: 'BebidasCtrl'
      }
    }
  })
  
	.state('app.bebidas-detail', {
	  url: '/bebidas/:bebidasId',
	  views: {
	    'menuContent': {
	      templateUrl: 'templates/bebidas-detail.html',
	      controller: 'BebidasDetailCtrl'
	    }
	  }
	})   
  
  // !BEBIDAS





// os defaults



  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
   $urlRouterProvider.otherwise('/start');
});
