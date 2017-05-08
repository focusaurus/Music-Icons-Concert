angular.module('NoteWrangler').factory('User', function($resource){
  return $resource('/user/:id');
});
