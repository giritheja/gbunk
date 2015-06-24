// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
.controller('locator',function($scope,geolocation){
  $scope.location=function(){
    geolocation.getCurrentPosition().then(function(data){
      console.log(data.coords.accuracy);
      $scope.latitude=data.coords.latitude;
      $scope.longitude=data.coords.longitude;
      $scope.altitude=data.coords.altitude;
      $scope.accuracy=data.coords.accuracy;
    }) 
  }
});
