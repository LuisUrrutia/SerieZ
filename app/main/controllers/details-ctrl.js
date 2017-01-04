'use strict';
angular.module('main')
.controller('DetailsCtrl', function ($log, $stateParams, Config, Tmdb, Favorites) {

  var vm = this;
  var id = parseInt($stateParams.id);

  vm.baseImgUrl = Config.ENV.TMDB_IMG_URL;
  vm.serie = {};
  vm.inFavorites = false;
  vm.saveToFavorites = saveToFavorites;
  vm.deleteFromFavorites = deleteFromFavorites;

  Favorites.isFavorite(id)
    .then(function () {
      vm.inFavorites = true;
    });


  Tmdb.getTvShowDetails(id)
    .then(function (response) {
      vm.serie = response.data;
    }, function (error) {
      $log.error(error);
    });

  function saveToFavorites () {
    Favorites.saveFavorite({
      'id': vm.serie.id,
      'name': vm.serie.name,
      'overview': vm.serie.overview,
      'backdrop_path': vm.serie.backdrop_path
    }).then(function () {
      vm.inFavorites = true;
    });
  }

  function deleteFromFavorites () {
    Favorites.removeFavorite(id)
      .then(function () {
        vm.inFavorites = false;
      });
  }
});
