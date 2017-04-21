angular.module('NoteWrangler').directive('miPageNav', function(){
  return{
    replace: true,
    restrict: 'E',
    templateUrl: 'assets/templates/directives/miPageNav.html'
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp('/' + name + '($ | /)').test($location.path());
    };
   }
  };
});
