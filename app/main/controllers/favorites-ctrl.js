'use strict';
angular.module('main')
.controller('FavoritesCtrl', function (Favorites, Config) {

  var vm = this;
  vm.tvShows = [];
  vm.baseImgUrl = Config.ENV.TMDB_IMG_URL;

  Favorites.getFavorites()
    .then(function (value) {
      vm.tvShows = value;
    });
});
