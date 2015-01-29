 angular.module('kimodotestApp').factory('ApiService', ['$http', '$q', function ($http, $q){

      function getInfo(){
        var deferred = $q.defer();
        $http.get('https://www.kimonolabs.com/api/817h8ch0?apikey=2S69RYjcjjB1tgQbDo8VbmB0wDutnGSu')
          .success(function(data){
            deferred.resolve(data.results.collection3[1])
          })
          .error(function(err){
            console.log('Error retrieving data');
            deferred.reject(err);
          });
          return deferred.promise;
      }
      return {
        getInfo: getInfo
      };
    }]);
