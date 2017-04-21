angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider

  .when('/'), {
    redirectTo: '/notes'
  })

  .when('/notes'), {
    templateURl: 'assets/templates/notes/index.html',
    controller: 'NotesIndexController'
  })

  .when('/new'), {
    templateURl: 'assets/templates/notes/new.html',
    controller: 'NotesCreateController'
  })

  .when('/delete'), {
    templateURl: 'assets/templates/notes/index.html',
    controller: 'NotesDeleteController'
  })

  .when('/:id'), {
    templateURl: 'assets/templates/notes/index.html',
    controller: 'NotesShowController'
  })

  .when('/:id/edit'), {
    templateURl: 'assets/templates/notes/edit.html',
    controller: 'NotesEditController'
  })

  .when('/users'), {
    templateURl: 'assets/templates/users/index.html',
    controller: 'UserIndexController'
  })

  .when('/users/:id'), {
    templateURl: 'assets/templates/users/show.html',
    controller: 'UserShowController'
  })
});
