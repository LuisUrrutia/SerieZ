'use strict';

describe('module: main, service: Tmdb', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Tmdb;
  beforeEach(inject(function (_Tmdb_) {
    Tmdb = _Tmdb_;
  }));

  it('should do something', function () {
    expect(!!Tmdb).toBe(true);
  });

});
