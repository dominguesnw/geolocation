'use strict';

var tornadoNwController = angular.module('tornadoNwController', []);

tornadoNwController.controller('IndexCtrl', ['$scope', '$http',
    function ($scope, $http) {

        navigator.geolocation.getCurrentPosition(
            function (position) {
                alert(position.coords.latitude, position.coords.longitude);
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
                $http.get(url)
                    .then(function (result) {
                        $scope.address = result.data.results[1].formatted_address;
                    });
            },
            function (error) {
                alert(error.message);
            }, {
                enableHighAccuracy: true
                , timeout: 5000
            }
        );

    }
]);
