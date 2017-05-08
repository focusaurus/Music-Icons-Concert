angular.module('NoteWrangler').factory('Note', function($resource){
  return $resource('/notets/:id', {id: '@id'}, {
    update: {
      method:  'PUT'
    }

  });
});
