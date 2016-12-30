angular.module('app.controllers', [])

.controller('billingDetailsCtrl', function ($scope, $stateParams,$state,$http,$ionicPopup,$ionicLoading) {
  $ionicLoading.show();
  $http.get('http://env-7729277.j.layershift.co.uk/DSBillingManagement/api/billingManagement/v2/billingAccount/15').then(function(resp){
  		console.log('Success', resp); // JSON object
      $scope.billingAccount=resp;
        $ionicLoading.hide();
  	}, function(err){
  		console.error('ERR', err);
      $ionicLoading.hide();
      var alertPopup = $ionicPopup.alert({

        title: 'Get Billing Account details error: Alert',
        template:'Error occured while calling the API:'+err
      });
  	});
})

.controller('loginCtrl', function ($scope, $stateParams,$state,$http,$ionicPopup,$ionicLoading) {
    $scope.click =  function(){
      $ionicLoading.show();
      $ionicLoading.hide();
      $state.go('tabsController.billingDetails');
    }
})

.controller('paymentPreferenceCtrl', function ($scope, $stateParams,$state,$http,$ionicPopup,$ionicLoading) {
  $ionicLoading.show();
  $http.get('http://env-7729277.j.layershift.co.uk/DSBillingManagement/api/billingManagement/v2/billingAccount/15').then(function(resp){
  		console.log('Success', resp); // JSON object
      $scope.billingAccount=resp;
        $ionicLoading.hide();
  	}, function(err){
  		console.error('ERR', err);
      $ionicLoading.hide();
      var alertPopup = $ionicPopup.alert({
        title: 'Get Billing Account details error: Alert',
        template:'Error occured while calling the API:'+err
      });
  	});
})

.controller('relatedPartiesCtrl', function ($scope, $stateParams,$state,$http,$ionicPopup,$ionicLoading) {
  $ionicLoading.show();
  $http.get('http://env-7729277.j.layershift.co.uk/DSBillingManagement/api/billingManagement/v2/billingAccount/15').then(function(resp){
  		console.log('Success', resp); // JSON object
      $scope.billingAccount=resp;
        $ionicLoading.hide();
  	}, function(err){
  		console.error('ERR', err);
      $ionicLoading.hide();
      var alertPopup = $ionicPopup.alert({
        title: 'Get Billing Account details error: Alert',
        template:'Error occured while calling the API:'+err
      });
  	});
})

.controller('menuCtrl', function ($scope, $stateParams,$state,$http,$ionicPopup,$ionicLoading) {
  $ionicLoading.show();
  $http.get('http://env-7729277.j.layershift.co.uk/DSBillingManagement/api/billingManagement/v2/billingAccount/15').then(function(resp){
  		console.log('Success', resp); // JSON object
      $scope.billingAccount=resp;
        $ionicLoading.hide();
  	}, function(err){
  		console.error('ERR', err);
      $ionicLoading.hide();
      var alertPopup = $ionicPopup.alert({
        title: 'Get Billing Account details error: Alert',
        template:'Error occured while calling the API:'+err
      });
  	});
})
