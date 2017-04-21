angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider.when('/'), {
    redirectTo: '/notes'
  })
  $routeProvider.when('/notes'), {
    templateURl: 'assets/templates/notes/index.html',
    controller: 'NotesIndexController'
  })
  $routeProvider.when('/new'), {
    templateURl: 'assets/templates/notes/new.html',
    controller: 'NotesCreateController'
  })
  $routeProvider.when('/delete'), {
    templateURl: 'assets/templates/notes/index.html',
    controller: 'NotesDeleteController'
  })
  $routeProvider.when('/:id'), {
    templateURl: 'assets/templates/notes/index.html',
    controller: 'NotesShowController'
  })
  $routeProvider.when('/:id/edit'), {
    templateURl: 'assets/templates/notes/edit.html',
    controller: 'NotesEditController'
  })
});
