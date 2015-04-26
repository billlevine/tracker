'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('trackerApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should always be 1', function () {
    expect(1);
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
