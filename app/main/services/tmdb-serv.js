'use strict';
angular.module('main')
.service('Tmdb', function ($http, Config) {

  this.getPopularTvShows = getPopularTvShows;
  this.searchTvShow = searchTvShow;
  this.getTvShowDetails = getTvShowDetails;


  function getPopularTvShows () {
    return $http({
      url: Config.ENV.TMDB_API + '/tv/top_rated',
      method: 'GET',
      params: {
        'api_key': Config.ENV.TMDB_API_KEY,
        'language': Config.ENV.DEFAULT_LANG
      }
    });
  }

  function searchTvShow (tvShowName) {
    return $http({
      url: Config.ENV.TMDB_API + '/search/tv',
      method: 'GET',
      params: {
        'api_key': Config.ENV.TMDB_API_KEY,
        'language': Config.ENV.DEFAULT_LANG,
        'query': tvShowName
      }
    });
  }

  function getTvShowDetails (id) {
    return $http({
      url: Config.ENV.TMDB_API + '/tv/' + id,
      method: 'GET',
      params: {
        'api_key': Config.ENV.TMDB_API_KEY,
        'language': Config.ENV.DEFAULT_LANG
      }
    });
  }

});
