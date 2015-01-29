

/**
 * @ngdoc function
 * @name kimodotestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kimodotestApp
 */
angular.module('kimodotestApp')
  .controller('ApiCtrl', ['$scope', 'ApiService', function ($scope, ApiService) {
    function fetchData(){
      ApiService.getInfo().then(function(data){
        $scope.info = data;
      });
    }
    fetchData();
  }]);
