var app = angular.module('myApp', []);

app.controller("PeopleCtrl", ['$scope','$http', function($scope, $http)
{   
    // Display Last 7 Day column
    $scope.current = true;
    // Read json data
    $http.get('json/sales.json').success (function(data){
      //  alert(parseInt(((data.data[0].priormonthattain).trim()).substring(0, (data.data[0].priormonthattain).trim().length - 1)))
        // Header info
        $scope.sales = data.headers;  
        // content
        $scope.records = data.data;  
    });
    
    $scope.radioClick = function () { 
        // Toggle Last 7 Day column
        if(document.fTable.timePeriod[1].checked == true)
           $scope.current = false;
        else
           $scope.current = true; 
     }
}]
);
 