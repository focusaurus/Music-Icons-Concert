angular.module('NoteWrangler').controller('NotesShowController', function(User, $scope, $routeParams){
  $scope.note = Note.get({id: $routeParams.id});

});
