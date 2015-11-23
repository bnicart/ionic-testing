describe('AccountCtrl', function() {
  var scope;

  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('AccountCtrl', {$scope: scope});
  }));

  it('should have enabled friends to be true', function() {
    expect(scope.settings.enableFriends).toEqual(true);
  });
});
