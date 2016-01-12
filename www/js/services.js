angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

////////////////////////////////////////////////////////////////////////////

.factory('Entradas', function($http) {
	var entradas = [];

	return {
		all: function(){
			return $http.get("http://fastrequest.pedrocarmo.pt/api/entradas/get-all.php").then(function(response){
				entradas = response.data;				
				return entradas;
			});
		},
		get: function(entradasId){
			for(i=0;i<entradas.length;i++){
				if(entradas[i].id == entradasId){
					return entradas[i];
				}
			}
			return null;
		}
	}
})


.factory('Refeicoes', function($http) {
	var refeicoes = [];

	return {
		all: function(){
			return $http.get("http://fastrequest.pedrocarmo.pt/api/refeicoes/get-all.php").then(function(response){
				refeicoes = response.data;				
				return refeicoes;
			});
		},
		get: function(refeicoesId){
			for(i=0;i<refeicoes.length;i++){
				if(refeicoes[i].id == refeicoesId){
					return refeicoes[i];
				}
			}
			return null;
		}
	}
})


.factory('Bebidas', function($http) {
	var bebidas = [];

	return {
		all: function(){
			return $http.get("http://fastrequest.pedrocarmo.pt/api/bebidas/get-all.php").then(function(response){
				bebidas = response.data;				
				return bebidas;
			});
		},
		get: function(bebidasId){
			for(i=0;i<bebidas.length;i++){
				if(bebidas[i].id == bebidasId){
					return bebidas[i];
				}
			}
			return null;
		}
	}
})
;
