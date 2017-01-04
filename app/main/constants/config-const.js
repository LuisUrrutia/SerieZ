'use strict';
angular.module('main')
  .constant('Config', {

    /*eslint-disable */
    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'TMDB_API': 'https://api.themoviedb.org/3',
    'TMDB_API_KEY': '8bab4bab26fb49a2a86139047d81ec48',
    'TMDB_IMG_URL': 'https://image.tmdb.org/t/p/w500',
    'DEFAULT_LANG': 'es-CL'
      /*endinject*/
    },

    // gulp build-vars: injects build vars
    BUILD: {
      /*inject-build*/
      /*endinject*/
    }
    /*eslint-enable */

  });
