angular.module('NoteWrangler').controller('NotesIndexController', function(Notes, Scope){
$scope.note= Notes.query
});
