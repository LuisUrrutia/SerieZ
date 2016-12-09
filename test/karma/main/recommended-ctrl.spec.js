'use strict';

describe('module: main, controller: RecommendedCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RecommendedCtrl;
  beforeEach(inject(function ($controller) {
    RecommendedCtrl = $controller('RecommendedCtrl');
  }));

  it('should do something', function () {
    expect(!!RecommendedCtrl).toBe(true);
  });

});
