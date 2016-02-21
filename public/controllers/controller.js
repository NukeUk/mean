/**
 * Created by nikitaukolov on 21.02.16.
 */
var myapp = angular.module('MyApp',[]);
myapp.controller('AppCtrl',['$scope', '$http', function($scope,$http){
    console.log('Hello from controller');
    var refresh = function() {
        $http.get('/contactlist').success(function (response) {
            //console.log('I got the data i requested');
            $scope.contactlist = response;
            $scope.contact = '';
        });
    };

    refresh();

    $scope.addContact = function(){
        //console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
           console.log(response);
            refresh();
        });
    }


}]);