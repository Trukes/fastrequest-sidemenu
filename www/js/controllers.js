angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

/* Controladores adicionados */
.controller('StartCtrl', function($scope, $state) {
//	StatusBar.hide();
	$scope.iniciarPedido = function(){
		$state.go('app.entradas');
	}
})

.controller('EntradasCtrl', function($scope, $state, $ionicModal, $ionicModal, $localstorage, Entradas) {

	Entradas.all().then(function(entradas){
		//users is an array of user objects
		$scope.entradas = entradas;
	});
	

	$localstorage.set('name', 'Max');
	console.log($localstorage.get('name'));	
	$localstorage.setObject('post', {
	    name: 'Thoughts',
	    text: 'Today was a good day'
	});

  
	
 // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openModal = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

   
  $scope.addEntradas = function(index){
	$localstorage.setObject('lsentradas', {
	    id: index
	})
	
	console.dir($localstorage.getObject('lsentradas'));		
  }

	
/*
	$ionicModal.fromTemplateUrl('pedido.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });
	  $scope.openModal = function() {
	    $scope.modal.show();
	  };
	  $scope.closeModal = function() {
	    $scope.modal.hide();
	  };
*/
	
})

.controller('EntradasDetailCtrl', function($scope, $stateParams, Entradas) {

  $scope.entrada = Entradas.get($stateParams.entradasId);

})

.controller('RefeicoesCtrl', function($scope, $state, $ionicModal, $localstorage, Refeicoes) {

	Refeicoes.all().then(function(refeicoes){
		//users is an array of user objects
		$scope.refeicoes = refeicoes;
	});
	
	
  //$scope.teste = $localstorage.get('name');
  $scope.teste = $localstorage.getObject('post');
 
 // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openModal = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
	
	
	
	
})

.controller('RefeicoesDetailCtrl', function($scope, $stateParams, Refeicoes) {

  $scope.refeicao = Refeicoes.get($stateParams.refeicoesId);

})

.controller('BebidasCtrl', function($scope, $state, $ionicModal, Bebidas) {

	Bebidas.all().then(function(bebidas){
		//users is an array of user objects
		$scope.bebidas = bebidas;
	});
	

 // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openModal = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
	

	
})

.controller('BebidasDetailCtrl', function($scope, $stateParams, Bebidas) {

  $scope.bebida = Bebidas.get($stateParams.bebidasId);

})

;