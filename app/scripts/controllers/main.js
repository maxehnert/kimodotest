'use strict';

/**
 * @ngdoc function
 * @name kimodotestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kimodotestApp
 */
angular.module('kimodotestApp')
  .controller('MainCtrl', ['$scope', 'ApiService', function ($scope, ApiService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(function () {
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            // data: [2, '{{last_price}}', '{{bid_price}}', {{ask_price}}, 2]
            data: [2,4,6,8]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
  });

}]);
