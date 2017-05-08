angular.module('NoteWrangler').controller('NotesShowController', function(User, $scope, $routeParams){
  $scope.user = User.get({id: $routeParams.id});

});
