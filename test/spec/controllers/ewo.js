'use strict';

describe('Controller: EwoCtrl', function () {

  // load the controller's module
  beforeEach(module('trackerApp'));

  var EwoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EwoCtrl = $controller('EwoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
