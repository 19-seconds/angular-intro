(function() {
  "use strict";

  angular.module("app").controller("messageCtrl", function($scope) {

    $scope.taskOne = "take out the trash";



    window.$scope = $scope;
  });
})();