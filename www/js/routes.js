angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.billingDetails', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/billingDetails.html',
        controller: 'billingDetailsCtrl'
      }
    }
  })

    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.paymentPreference', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/paymentPreference.html',
        controller: 'paymentPreferenceCtrl'
      }
    }
  })

  .state('tabsController.relatedParties', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/relatedParties.html',
        controller: 'relatedPartiesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/login')



});
