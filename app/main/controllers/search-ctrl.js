'use strict';
angular.module('main')
.controller('SearchCtrl', function ($scope, Tmdb, Config) {

  var vm = this;
  vm.searchResult = [];
  vm.baseImgUrl = Config.ENV.TMDB_IMG_URL;

  $scope.$watch('vm.toSearch', function (newVal) {
    console.log(newVal);
    if (newVal == null) {
      vm.searchResult = [];
    } else {
      Tmdb.searchTvShow(newVal)
        .then(function (response) {
          vm.searchResult = response.data.results;
        }, function () {
          vm.searchResult = [];
        });
    }
  });
});
