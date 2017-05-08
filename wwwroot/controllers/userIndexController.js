angular.module('NoteWrangler').controller('UserIndexController', function(User, $scope){
  $scope.user = User.query();
  // $scope.search = ();
});
