angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Cocktail 1',
    lastText: 'Vodka',
    face: 'img/cocktail.png'
  }, {
    id: 1,
    name: 'Coktail 2',
    lastText: 'Rhum',
    face: 'img/cocktail.png'
  }, {
    id: 2,
    name: 'Biere 1',
    lastText: 'Blonde',
    face: 'img/beer.png'
  }, {
    id: 3,
    name: 'Biere 2',
    lastText: 'Ambrée',
    face: 'img/beer.png'
  }, {
    id: 4,
    name: 'Biere 3',
    lastText: 'Blanche',
    face: 'img/beer.png'
  }, {
    id: 5,
    name: 'Biere 4',
    lastText: 'Blanche',
    face: 'img/beer.png'
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
});
