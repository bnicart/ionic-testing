describe('ChatsCtrl', function() {
  var scope;

  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  beforeEach(inject(function($rootScope, $controller, _Chats_) {
    scope = $rootScope.$new();
    $controller('ChatsCtrl', {$scope: scope, Chats: _Chats_});
  }));

  it('should have 5 chats', function() {
    expect(scope.chats.length).toEqual(5);
  });
});
