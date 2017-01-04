'use strict';
angular.module('main')
.service('Favorites', function ($q) {

  this.getFavorites = getFavorites;
  this.saveFavorite = saveFavorite;
  this.isFavorite = isFavorite;
  this.removeFavorite = removeFavorite;


  function _saveNewFavorite (tvShowObject) {
    var deferred = $q.defer();

    var value = [tvShowObject];
    localforage.setItem('favorites', value)
      .then(function (value) {
        deferred.resolve(value);
      }, function () {
        deferred.reject();
      });

    return deferred.promise;
  }

  function getFavorites () {
    return localforage.getItem('favorites');
  }

  function saveFavorite (tvShowObject) {
    var deferred = $q.defer();

    getFavorites()
      .then(function (value) {

        if (value != null) {
          // If a value already exists, we're going to append a new show
          value.push(tvShowObject);

          localforage.setItem('favorites', value)
            .then(function (value) {
              deferred.resolve(value);
            }, function () {
              deferred.reject();
            });
        } else {
          _saveNewFavorite(tvShowObject)
            .then(function (value) {
              deferred.resolve(value);
            }, function () {
              deferred.reject();
            });
        }

      }, function () {
        // We're saving a show for first time.
        _saveNewFavorite(tvShowObject)
          .then(function (value) {
            deferred.resolve(value);
          }, function () {
            deferred.reject();
          });
      });

    return deferred.promise;
  }

  function isFavorite (id) {
    var deferred = $q.defer();

    getFavorites()
      .then(function (value) {
        if (value != null) {
          for (var i = 0; i < value.length; i++) {
            if (value[i].id == id) {
              deferred.resolve(i);
            }
          }
        }
        deferred.reject();
      }, function () {
        deferred.reject();
      });

    return deferred.promise;
  }

  function removeFavorite (id) {
    var deferred = $q.defer();

    getFavorites()
      .then(function (value) {
        var index = -1;

        for (var i = 0; i < value.length; i++) {
          if (value[i].id == id) {
            index = i;
          }
        }

        value.splice(index, 1);

        localforage.setItem('favorites', value)
          .then(function (value) {
            deferred.resolve(value);
          }, function () {
            deferred.reject();
          });

      }, function () {
        deferred.reject();
      });

    return deferred.promise;
  }

});
