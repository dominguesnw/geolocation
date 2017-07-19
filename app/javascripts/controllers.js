'use strict';

var tornadoNwController = angular.module('tornadoNwController', []);

tornadoNwController.controller('IndexCtrl', ['$scope', '$http',
    function ($scope, $http) {

        navigator.geolocation.getCurrentPosition(
            function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
                $http.get(url)
                    .then(function (result) {
                        var address = result.data.results[1].formatted_address;
                        $scope.intro = result.data.results[1].formatted_address;
                        alert(address);
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
