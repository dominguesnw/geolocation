'use strict';

var tornadoNwController = angular.module('tornadoNwController', []);

tornadoNwController.controller('IndexCtrl', ['$scope', '$http',
    function ($scope, $http) {

        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate, error, { timeout: 3000 });

        function onPositionUpdate(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
            $http.get(url)
                .then(function (result) {
                    var address = result.data.results[2].formatted_address;
                    $scope.address = address;
                    $scope.intro = result.data.results[1].formatted_address;
                });
        };

        function error(err) {
            if (err.code == 1) {
                alert("Error: Access is denied!");
            } else if (err.code == 2) {
                alert("Error: Position is unavailable!");
            }
        };

    }
]);
