angular.module('NoteWrangler', []);
angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider

  .when('/', {
    redirectTo: '/notes'
  })

  .when('/notes', {
    templateURl: '/templates/notes/index.html',
    controller: 'NotesIndexController'
  })

  .when('/new', {
    templateURl: '/templates/notes/new.html',
    controller: 'NotesCreateController'
  })

  .when('/delete', {
    templateURl: '/templates/notes/index.html',
    controller: 'NotesDeleteController'
  })

  .when('/:id', {
    templateURl: '/templates/notes/index.html',
    controller: 'NotesShowController'
  })

  .when('/:id/edit', {
    templateURl: '/templates/notes/edit.html',
    controller: 'NotesEditController'
  })

  .when('/users', {
    templateURl: '/templates/users/index.html',
    controller: 'UserIndexController'
  })

  .when('/users/:id', {
    templateURl: '/templates/users/show.html',
    controller: 'UserShowController'
  })
});
