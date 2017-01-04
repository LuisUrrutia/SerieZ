'use strict';
angular.module('main')
.controller('RecommendedCtrl', function ($log, $window, Config, Tmdb) {

  var vm = this;

  vm.series = [];
  vm.baseImgUrl = Config.ENV.TMDB_IMG_URL;

  Tmdb.getPopularTvShows()
    .then(function (response) {
      vm.series = response.data.results;
    }, function (error) {
      // error.status_message
      console.log(error);
    });

});
