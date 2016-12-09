'use strict';

describe('module: main, controller: FavoritesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var FavoritesCtrl;
  beforeEach(inject(function ($controller) {
    FavoritesCtrl = $controller('FavoritesCtrl');
  }));

  it('should do something', function () {
    expect(!!FavoritesCtrl).toBe(true);
  });

});
