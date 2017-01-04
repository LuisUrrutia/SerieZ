'use strict';

describe('module: main, service: Favorites', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Favorites;
  beforeEach(inject(function (_Favorites_) {
    Favorites = _Favorites_;
  }));

  it('should do something', function () {
    expect(!!Favorites).toBe(true);
  });

});
