angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider.when('/'), {
    redirectTo: '/notes'
  })
  $routeProvider.when('/notes'), {
    templateURl: '/templates/notes/index.html',
    controller: 'NotesIndexController'
  })
  $routeProvider.when('/new'), {
    templateURl: '/templates/notes/new.html',
    controller: 'NotesCreateController'
  })
  $routeProvider.when('/delete'), {
    templateURl: '/templates/notes/index.html',
    controller: 'NotesDeleteController'
  })
  $routeProvider.when('/:id'), {
    templateURl: '/templates/notes/index.html',
    controller: 'NotesShowController'
  })
  $routeProvider.when('/:id/edit'), {
    templateURl: '/templates/notes/edit.html',
    controller: 'NotesEditController'
  })
});
