// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'starter.services', 'ngCordovaBeacon'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(false);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('141', {
      url: '/141',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('141.homev1', {
      url: '/homev1',
      views: {
        'menuContent': {
          templateUrl: 'templates/accueuil.html',
          controller: 'HomeV1Ctrl'
        }
      }
    })
    .state('141.gpsManual', {
      url: '/gpsManual',
      views: {
        'menuContent': {
          templateUrl: 'templates/gps-manual.html',
          controller: 'ManualGpsCtrl'
        }
      }
    })
    .state('141.manual', {
      url: '/manual',
      views: {
        'menuContent': {
          templateUrl: 'templates/manual.html',
          controller: 'ManualCtrl'
        }
      }
    })
    .state('141.clickshare', {
      url: '/clickshare',
      views: {
        'menuContent': {
          templateUrl: 'templates/clickshare.html',
          controller: 'ClickshareCtrl'
        }
      }
    })
    .state('141.parenthse', {
      url: '/parenthese',
      views: {
        'menuContent': {
          templateUrl: 'templates/parenthese.html',
          controller: 'ParentheseCtrl'
        }
      }
    })
    .state('141.studiovideo', {
      url: '/studiovideo',
      views: {
        'menuContent': {
          templateUrl: 'templates/studioVideo.html',
          controller: 'StudioVideoCtrl'
        }
      }
    })
    .state('141.auditorium', {
      url: '/auditorium',
      views: {
        'menuContent': {
          templateUrl: 'templates/auditorium.html',
          controller: 'AuditoriumCtrl'
        }
      }
    })
    .state('141.huddleroomcollab', {
      url: '/huddleroomcollab',
      views: {
        'menuContent': {
          templateUrl: 'templates/huddleRoomCollab.html',
          controller: 'HuddleRoomCollabCtrl'
        }
      }
    })
    .state('141.miracast', {
      url: '/miracast',
      views: {
        'menuContent': {
          templateUrl: 'templates/miracastMicrosoft.html',
          controller: 'MiracastMicrosoftCtrl'
        }
      }
    })
    .state('141.est2f12', {
      url: '/est2f12',
      views:{
        'menuContent': {
          templateUrl: 'templates/est2f12.html',
          controller: 'Est2F12Ctrl'
        }
      }
    })
    .state('141.est2f20', {
      url: '/est2f20',
      views:{
        'menuContent': {
          templateUrl: 'templates/est2f20.html',
          controller: 'Est2F20Ctrl'
        }
      }
    })
    .state('141.nord1f06', {
      url: '/nord1f06',
      views:{
        'menuContent': {
          templateUrl: 'templates/nord1f06.html',
          controller: 'Nord1F06Ctrl'
        }
      }
    })
    .state('141.est1f00', {
      url: '/est1f00',
      views: {
        'menuContent': {
          templateUrl: 'templates/est1f00.html',
          controller: 'Est1F00Ctrl'
        }
      }
    })
    .state('141.huddlecrestron', {
      url: '/huddlecrestron',
      views: {
        'menuContent': {
          templateUrl: 'templates/huddleCrestron.html',
          controller: 'HuddleCrestronCtrl'
        }
      }
    })
    .state('141.home',{
      url: '/141/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('141.signin', {
      url: '/signin',
      views: {
        'menuContent': {
          templateUrl: 'templates/signin.html',
          controller: 'SigninCtrl'
        }
      }
    })
    .state('141.signup', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'templates/signup.html',
          controller: 'SignupCtrl'
        }
      }
    })
    .state('141.connect', {
      url: '/connect',
      views: {
        'menuContent': {
          templateUrl: 'templates/connect.html',
          controller: 'ConnectCtrl'
        }
      }
    })
    .state('141.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html',
          controller: 'NewsCtrl'
        }
      }
    })
    .state('141.contactUs', {
      url: '/contactUs',
      views: {
        'menuContent': {
          templateUrl: 'templates/contactUs.html',
          controller: 'ContactUsCtrl'
        }
      }
    })
    .state('141.commodites', {
      url: '/commodites',
      views: {
        'menuContent': {
          templateUrl: 'templates/commodites.html',
          controller: 'CommoditesCtrl'
        }
      }
    })
    .state('141.details', {
      url: '/name=:name&restaurant=:placeID',
      views: {
        'menuContent': {
          templateUrl: 'templates/detailsRestau.html',
          controller: 'DetailsRestauCtrl',
          controllerAs: 'placeID'
        }
      }
    })
    .state('141.transports', {
      url: '/transports',
      views: {
        'menuContent': {
          templateUrl: 'templates/transports.html',
          controller: 'TransportsCtrl'
        }
      }
    })
    .state('141.control', {
      url: '/control',
      views: {
        'menuContent': {
          templateUrl: 'templates/control.html',
          controller: 'ControlCtrl'
        }
      }
    })
    .state('141.controlest1c11', {
      url: '/controlest1c11',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest1c11.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest1f06', {
      url: '/controlest1f06',
      views: {
        'menuContent': {
          templateUrl: 'templates/est1f06.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlcafeteria', {
      url: '/controlcafeteria',
      views: {
        'menuContent': {
          templateUrl: 'templates/cafeteria.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlsud2f00', {
      url: '/controlsud2f00',
      views: {
        'menuContent': {
          templateUrl: 'templates/sud2f00.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlEst1f14', {
      url: '/controlEst1f14',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlEst1F14.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlsud1f00', {
      url: '/controlsud1f00',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlSud1F00.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlouest1f01', {
      url: '/controlouest1f01',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlOuest1f01.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlouest1f08', {
      url: '/controlouest1f08',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlOuest1f08.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlouest1f09', {
      url: '/controlouest1f09',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlouest1f09.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlouest1f13', {
      url: '/controlouest1f13',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlouest1f13.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest1f00', {
      url: '/controlest1f00',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest1f00.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlouest1f04', {
      url: '/controlouest1f04',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlouest1f04.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest1be', {
      url: '/controlest1be',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest1be.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlnor1f06', {
      url: '/controlnord1f06',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlnord1f06.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlbat141r0', {
      url: '/controlbat141r0',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlbat141r0.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlouest2f00', {
      url: '/controlouest2f00',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlouest2f00.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest2f06', {
      url: '/controlest2f06',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest2f06.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest2f08', {
      url: '/controlest2f08',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest2f08.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest2f23', {
      url: '/controlest2f23',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest2f23.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest2f22', {
      url: '/controlest2f22',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest2f22.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest2f20', {
      url: '/controlest2f20',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest2f20.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest2c11', {
      url: '/controlest2c11',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest2c11.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlouest2f04', {
      url: '/controlouest2f04',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlouest2f04.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.controlest2c22', {
      url: '/controlest2c22',
      views: {
        'menuContent': {
          templateUrl: 'templates/controlest2c22.html',
          controller: 'ControlEst1C11Ctrl'
        }
      }
    })
    .state('141.ResaSalle', {
      url: '/resasalle',
      views: {
        'menuContent': {
          templateUrl: 'templates/ResaSalle.html',
          controller: 'ResaSalleCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/141/signin');
});
