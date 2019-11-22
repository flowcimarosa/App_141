angular.module('starter.controllers', ['ngCordova','ngCordovaBeacon'])

/*************************
 *
 * Controller de la view localisation de proximité
 *
 *************************/

  .controller("ControlCtrl", function($scope, $rootScope, $ionicPlatform, $cordovaBeacon, $ionicPopup, Beacons) {
    $scope.beacons = Beacons;

    console.log(Beacons);

    var popupOpen = true;


    /*var enablePopup = $ionicPopup.confirm({
      title: 'Piloter la salle',
      template: 'Voulez vous activer la localisation automatique des salles de réunion ?'
    });

    enablePopup.then(function(res) {
      if(res) {
        popupOpen = false;
      } else {
        popupOpen = true;
      }
    });


    $ionicPlatform.ready(function() {


      $cordovaBeacon.requestWhenInUseAuthorization();
      $rootScope.$on('$cordovaBeacon:didRangeBeaconsInRegion', function(event, pluginResult) {

        var beacon = pluginResult.beacons[0];


        for(var i = 0; i < $scope.beacons.length; i++) {

          if (pluginResult.region.identifier == $scope.beacons[i].id  && beacon.proximity == 'ProximityNear' && popupOpen == false) {
            $scope.showConfirm($scope.beacons[i].id);
            console.log("On est dans la salle " + $scope.beacons[i].name);
          }
        }
      });


      for (var r in $scope.beacons) {

        var region = $scope.beacons[r];

        var beaconregion = $cordovaBeacon.createBeaconRegion(
          region.id, region.uuid, region.major, region.minor
        );

        $cordovaBeacon.startRangingBeaconsInRegion(beaconregion);
      }

    });

    //Fonction open Cordova Browser
    $scope.openCordovaWebView = function(siteInternet)
    {
      // Open cordova webview if the url is in the whitelist otherwise opens in app browser
      return cordova.InAppBrowser.open(siteInternet,'_self', 'location=yes', 'toolbar=yes', 'hardwareback=no');
    };

    //Fonction de popup
    $scope.showConfirm = function(salle) {
      //Boucle parcours du scope beacons
      for(var j in  $scope.beacons) {
        var jeacon = $scope.beacons[j];

        if(salle == jeacon.id) {
          var confirmPopup = $ionicPopup.confirm({
            title: 'Piloter la salle',
            template: 'Voulez vous prendre le contrôle de la salle '+ jeacon.name +' ?'
          });
          //flag etat popup
          popupOpen = true;

          var lienUrl = jeacon.url;

          confirmPopup.then(function(res) {
            if(res) {
              var ref = $scope.openCordovaWebView(lienUrl);
              ref.addEventListener("exit", onBackButton, false);
              function onBackButton(e) {
                popupOpen = false;
              }
            } else {
              console.log('Vous ne voulez pas prendre le contrôle');
              popupOpen = false;
            }
          });
        }
      }
    };*/
  })

  .controller('ControlEst1C11Ctrl', function (Beacons, $sce, $scope) {

    setInterval(function() {
      document.getElementById('loader').style.display='none';
    }, 4000);

    $scope.beacons = Beacons;

    var room = $scope.beacons[0].url;
    $scope.est1c11 = $sce.trustAsResourceUrl(room);

    var room1 = $scope.beacons[1].url;
    $scope.est1f06 = $sce.trustAsResourceUrl(room1);

    var room3 = $scope.beacons[2].url;
    $scope.sud2f00 = $sce.trustAsResourceUrl(room3);

    var room4 = $scope.beacons[3].url;
    $scope.est1f14 = $sce.trustAsResourceUrl(room4);

    var room5 = $scope.beacons[4].url;
    $scope.sud1f00 = $sce.trustAsResourceUrl(room5);

    var room6 = $scope.beacons[5].url;
    $scope.ouest1f01 = $sce.trustAsResourceUrl(room6);

    var room7 = $scope.beacons[6].url;
    $scope.ouest1f08 = $sce.trustAsResourceUrl(room7);

    var room8 = $scope.beacons[7].url;
    $scope.ouest1f09 = $sce.trustAsResourceUrl(room8);

    var room9 = $scope.beacons[8].url;
    $scope.ouest1f13 = $sce.trustAsResourceUrl(room9);

    var room10 = $scope.beacons[9].url;
    $scope.est1f00 = $sce.trustAsResourceUrl(room10);

    var room11 = $scope.beacons[10].url;
    $scope.est2f06 = $sce.trustAsResourceUrl(room11);

    var room12 = $scope.beacons[11].url;
    $scope.est2f08 = $sce.trustAsResourceUrl(room12);

    var room13 = $scope.beacons[12].url;
    $scope.est2f23 = $sce.trustAsResourceUrl(room13);

    var room14 = $scope.beacons[13].url;
    $scope.est2f22 = $sce.trustAsResourceUrl(room14);

    var room15 = $scope.beacons[14].url;
    $scope.est2c11 = $sce.trustAsResourceUrl(room15);

    var room16 = $scope.beacons[15].url;
    $scope.est2c22 = $sce.trustAsResourceUrl(room16);
  })

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    $scope.showSubMenu = function(){
      $scope.isShowSubMenu =! $scope.isShowSubMenu;
    };

    $scope.showSubMenu0 = function(){
      $scope.isShowSubMenu0 =! $scope.isShowSubMenu0;
    };

    $scope.showSubMenu1 = function () {
      $scope.isShowSubMenu1 =! $scope.isShowSubMenu1;
    };

    $scope.showSubMenu2 = function () {
      $scope.isShowSubMenu2 =! $scope.isShowSubMenu2;
    };

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/home.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

  /*******************************
   *
   *******************************/
  .controller('RssCtrl', ['$scope', '$http', function ($scope, $http) {

    var rssUrl = '';

    function parseRSS(url, callback) {
      $.ajax({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url),
        dataType: 'json',
        success: function(data) {
          callback(data);
        }
      });
    }

    console.log($scope.entries);
  }])

  /*******************************
   *
   * Controlleur de l'accueuil v1
   *
   *******************************/
  .controller('HomeV1Ctrl', ['$scope', '$state', '$ionicPopup', function ($scope, $state, $ionicPopup) {

    $scope.explore = function () {
      $state.go('141.gpsManual');
    }
  }])

  /******************************
   *
   * Controlleur de la view GPS / Mode d'emploi
   *
   */
  .controller('ManualGpsCtrl', ['$scope', '$state', '$ionicPopup', function ($scope, $state, $ionicPopup) {

  }])

  /***********************************
   *
   * Conotrolleur de la view Mode d'emploi
   *
   **********************************/
  .controller('ManualCtrl', ['$scope', '$state', '$ionicPopup', function ($scope, $state, $ionicPopup) {

  }])

  /*********************************
   *
   * Controlleur de la view Clickshare
   *
   ********************************/

  .controller('ClickshareCtrl', ['$scope', '$location', '$state', '$ionicPopup', '$http', function ($scope, $location, $state, $ionicPopup, $anchorScroll, $http) {

  }])

  /**********************************
   *
   * Controlleur de la view Parenthese
   *
   *********************************/

  .controller('ParentheseCtrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollTo = function () {
      $location.hash('parenthese2');
      $anchorScroll();
    };

    $scope.scrollTo1 = function () {
      $location.hash('parenthese3');
      $anchorScroll();
    };

    $scope.scrollTo2 = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    }
  }])

  /*********************************
   *
   * Controlleur de la view Studio vidéo
   *
   */

  .controller('StudioVideoCtrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollTo = function () {
      $location.hash('studioVideo2');
      $anchorScroll();
    };

    $scope.scrollTo1 = function () {
      $location.hash('studioVideo3');
      $anchorScroll();
    };

    $scope.scrollTo2 = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    }
  }])

  /*******************************
   *
   * Controlleur de la view Auditorium
   *
   *******************************/
  .controller('AuditoriumCtrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToProjection = function () {
      $location.hash('projection1');
      $anchorScroll();
    };

    $scope.scrollToClickshare = function () {
      $location.hash('projection4');
      $anchorScroll();
    };

    $scope.scrollToTV = function () {
      $location.hash('projection5');
      $anchorScroll();
    };

    $scope.scrollToConference = function () {
      $location.hash('projection6');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('projection2');
      $anchorScroll();
    };

    $scope.scrollTo1 = function () {
      $location.hash('projection3');
      $anchorScroll();
    };

    $scope.scrollTop = function () {
      $location.hash('topAudi');
      $anchorScroll();
    }
  }])

  /*******************************
   *
   * Controlleur de la view Huddle Room Collab
   *
   *******************************/

  .controller('HuddleRoomCollabCtrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToSansFil = function () {
      $location.hash('huddle1');
      $anchorScroll();
    };

    $scope.scrollToUSB = function () {
      $location.hash('huddle3');
      $anchorScroll();
    };

    $scope.scrollToWebConference = function () {
      $location.hash('huddle4');
      $anchorScroll();
    };

    $scope.scrollToCallWireless = function () {
      $location.hash('huddle5');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('huddle2');
      $anchorScroll();
    };

    $scope.scrollTo3 = function () {
      $location.hash('huddle6');
      $anchorScroll();
    };

    $scope.scrollTo2 = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    }
  }])

  /*******************************
   *
   * Controlleur de la view Miracast Microsoft
   *
   *******************************/

  .controller('MiracastMicrosoftCtrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToConnecter = function () {
      $location.hash('miracast1');
      $anchorScroll();
    };

    $scope.scrollToDeconnecter = function () {
      $location.hash('miracast3');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('miracast2');
      $anchorScroll();
    };

    $scope.scrollTo2 = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    }

  }])

  /*******************************
   *
   * Controlleur de la view Nord1F06
   *
   *******************************/

  .controller('Nord1F06Ctrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToReunionDalle = function () {
      $location.hash('est2f121');
      $anchorScroll();
    };

    $scope.scrollToReunionClickshare = function () {
      $location.hash('est2f122');
      $anchorScroll();
    };

    $scope.scrollToVisioConference = function () {
      $location.hash('est2f123');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    };
  }])

  /*******************************
   *
   * Controlleur de la view Est2F20
   *
   *******************************/

  .controller('Est2F20Ctrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToReunionDalle = function () {
      $location.hash('est2f121');
      $anchorScroll();
    };

    $scope.scrollToReunionClickshare = function () {
      $location.hash('est2f122');
      $anchorScroll();
    };

    $scope.scrollToVisioConference = function () {
      $location.hash('est2f123');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    };
  }])

  /*******************************
   *
   * Controlleur de la view Est2F12
   *
   *******************************/

  .controller('Est2F12Ctrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToReunionDalle = function () {
      $location.hash('est2f121');
      $anchorScroll();
    };

    $scope.scrollToReunionClickshare = function () {
      $location.hash('est2f122');
      $anchorScroll();
    };

    $scope.scrollToVisioConference = function () {
      $location.hash('est2f123');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    };
  }])

  /********************************
   *
   * Controlleur de la view Est1 F00
   *
   *******************************/
  .controller('Est1F00Ctrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToPresentation = function () {
      $location.hash('est1f001');
      $anchorScroll();
    };

    $scope.scrollToVisioConference = function () {
      $location.hash('est1f002');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    };
  }])

  /********************************
   *
   * Controlleur de la view Huddle Room - Crestron Mercury
   *
   *******************************/

  .controller('HuddleCrestronCtrl', ['$scope', '$location', '$state', '$ionicPopup', '$anchorScroll', function ($scope, $location, $state, $ionicPopup, $anchorScroll) {

    $scope.scrollToDemarrage = function () {
      $location.hash('huddleCrestron1');
      $anchorScroll();
    };

    $scope.scrollToPresentation = function () {
      $location.hash('huddleCrestron2');
      $anchorScroll();
    };

    $scope.scrollToAimedia = function () {
      $location.hash('huddleCrestron3');
      $anchorScroll();
    };

    $scope.scrollToCallBluetooth = function () {
      $location.hash('huddleCrestron4');
      $anchorScroll();
    };

    $scope.scrollTo = function () {
      $location.hash('tabs-height');
      $anchorScroll();
    };
  }])

  /*******************************
   *
   * Controlleur de l'accueuil
   *
   *******************************/

  .controller('HomeCtrl', ['$scope', '$state', '$ionicPopup', function ($scope, $state,$ionicPopup) {

    //Récupération des données utlisateurs
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $scope.signIn = 'Se Déconnecter';

        // User is signed in
        $scope.user = {
          id: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          name: user.displayName
        };

        //Condition si c'est une connection guest ou collaborateur
        if($scope.user.email === null){
          $scope.pseudo = 'Guest';
          $scope.collaborateur = 'un invité';

          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }
        } else {
          var values = $scope.user.email.split('@');
          var value1 = values[0];
          $scope.pseudo = value1;
          $scope.collaborateur = 'un collaborateur';


          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }
        }
      } else {
        // No user is signed in.
        console.log('No user sign in.');
        $scope.signIn = 'Se Connecter / S\'inscrire';
        $scope.signOut = function () {
          $state.go('signin');
        }
      }
    });
  }])

  /**********************************
   *
   * Controlleur de la connection
   *
   *********************************/
  .controller('SigninCtrl', ['$scope', '$state', '$ionicPopup', function($scope, $state, $ionicPopup){

    var x = document.getElementById('backButtonHide');

    //Fonction du lien du button
    $scope.go = function(path){
      $location.path(path);
    };

    $scope.user = {};

    //Function mot de passe oublié
    $scope.resetPassword = function () {
      var email = $scope.user.email;

      return firebase.auth().sendPasswordResetEmail(email).then(function (t) {
        alert('Regarder vos emails, vous avez reçu un reset de votre mot de passe;');
      }).catch(function (error) {
        alert(error);
        var errCode = error.code;

        alert(errCode);
        if(errCode === 'auth/argument-error'){
          var alertPopup = $ionicPopup.alert({
            title: 'Erreur',
            template: 'Veuillez remplir le champs Email avant la demande d\'un nouveau mot de passe.'
          });

          alertPopup.then(function () {
            console.log('Looser !!')
          })
        }
      })
    };

    //function de connection
    $scope.signInEmail = function () {
      var email = $scope.user.email;
      var password = $scope.user.password;

      //Retour des erreurs de connexion avec Firebase
      return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {

          var errCode = error.code;
          var errorMessage = error.message;

          if(errCode === 'auth/argument-error'){
            var alertPopup = $ionicPopup.alert({
              title: 'Erreur',
              template: 'Votre champs Email est vide.'
            });

            alertPopup.then(function () {
              console.log('T\'as alzheimer, j\'y peu rien.');
            });
          }
          else if(errCode === 'auth/wrong-password'){

            var alertPopup = $ionicPopup.alert({
              title: 'Erreur',
              template: 'Votre mot de passe n\'est pas correcte.'
            });

            alertPopup.then(function () {
              console.log('T\'as alzheimer, j\'y peu rien.');
            });

          } else if(errCode === 'auth/invalid-email') {

            var alertPopup0 = $ionicPopup.alert({
              title: 'Erreur',
              template: 'Votre email n\'est pas valide. Ex: votreidentifiant@mail.fr.'
            });

            alertPopup0.then(function () {
              console.log('Tu devrais consulter un ophtalmo.');
            });

          } else if(errCode === 'auth/user-disabled'){

            var alertPopup1 = $ionicPopup.alert({
              title: 'Erreur',
              template: 'Votre compte a été désactivé, veuiller contacter l\'administrateur.'
            });

            alertPopup1.then(function () {
              console.log('Tu es dans la merde, désolé !');
            });

          } else if(errCode === 'auth/user-not-found'){

            var alertPopup2 = $ionicPopup.alert({
              title: 'Erreur',
              template: 'Vous n\'avez pas encore de compte, inscrivez-vous !!'
            });

            alertPopup2.then(function () {
              console.log('Il faut commencer par le commencement petit scarabée.');
            });

          } else {

            alert(errorMessage);

          }

          authenticated = false;

          console.log('Authentication failed: ', error);
        })
        .then(function (t) {
          authenticated = true;

          if(authenticated = true){
            console.log('Logged in as: ', t.uid, authenticated);
            var alertPopup = $ionicPopup.alert({
              title: 'Connection',
              template: 'Bienvenue sur votre compte collaborateur.'
            });

            alertPopup.then(function (res) {
              if(res){
                $state.go('141.connect');
              } else {
                console.log('Tu sais pas taper ton mail ou ton mot de passe ? Noob !!!');
              }
            });
          }
        });
    };

    $scope.signInGuest = function () {
      return firebase.auth().signInAnonymously().catch(function (error) {
        //Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/operation-not-allowed'){
          alert('You must enbale Anonymous auth in the Firebase Console.');
        } else {
          console.log(error);
        }
      }).then(function (t) {
        authenticated = true;

        if(authenticated = true){
          var alertPopup = $ionicPopup.alert({
            title: 'Connection',
            template: 'Bienvenue sur votre compte collaborateur.'
          });

          alertPopup.then(function (res) {
            if(res){
              $state.go('141.connect');
            } else {
              console.log('Tu sais pas taper ton mail ou ton mot de passe ? Noob !!!');
            }
          });
        }
      });
    };

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        $state.go('141.connect');
      } else {
        // No user is signed in.
        console.log('connecte toi avant')
      }
    });

  }])

  /**********************************
   *
   * Conotrolleur de l'inscription
   *
   **********************************/
  .controller('SignupCtrl', ['$scope', '$ionicPopup', function($scope, $ionicPopup){

    $scope.user = {};

    //Fonction de l'inscription user & de l'envoie du mail de confirmation
    $scope.signUpEmail = function(){
      var email = $scope.user.email;
      var password = $scope.user.password;
      var name = $scope.user.displayName;
      console.log($scope.user.email, name);

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode == 'auth/weak-password') {
            $ionicPopup.alert({
              title: 'Erreur',
              template: 'Votre mot de passe doit contenir un minimum de 6 caratères.'
            });
          } else if (errorCode == 'auth/invalid-email') {
            $ionicPopup.alert({
              title: 'Erreur',
              template: 'Votre email n\'est pas dans le bon format (ex: votreidentifiant@mail.fr)'
            });
          } else if (errorCode == 'auth/email-already-in-use'){
            $ionicPopup.alert({
              title: 'Erreur',
              template: 'Il existe déjà un compte ayant cet email'
            });
          } else {
            alert(errorMessage);
          }
        }).then(function (t) {
        console.log(t);
        if(t !== ''){
          console.log('test');
          t.updateProfile({
            displayName: name
          }).then(function () {
            console.log('Username add');
          }).catch(function (error) {
            console.log('Err : '+ error);
          });
          t.sendEmailVerification();
          $ionicPopup.alert({
            title: 'Enregistré',
            template: 'Votre compte a bien été créé, vérifier votre email pour confirmer l\'inscription.'
          });
        }
      });
    }
  }])

  /**************************************
   *
   * Controlleur de la view connectée
   *
   **************************************/
  .controller('ConnectCtrl', ['$scope', '$state', '$ionicPopup', function ($scope, $state, $ionicPopup) {

    $scope.items = [];
    $scope.loadMore = function() {
      $http.get('/more-items').success(function(items) {
        useItems(items);
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.url = '';

    //Récupération des données utlisateurs
    firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        // User is signed in
        $scope.user = {
          id: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          name: user.displayName
        };

        //Condition si c'est une connection guest ou collaborateur
        if($scope.user.email === null){
          $scope.n = 'Guest';
          $scope.collaborateur = 'invité';

          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('141.signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }

        } else {
          var values = $scope.user.email.split('@');
          var value1 = values[0];
          var value2 = values[1];
          $scope.t = value2;
          $scope.pseudo = value1;
          $scope.n = $scope.user.name;
          console.log($scope.n);

          //Condition collaborateur ou invité
          if(value2 === 'videlio-iec.com'){
            $scope.collaborateur = 'collaborateur';
          } else {
            $scope.collaborateur = 'invité';
          }

          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('141.signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }
        }
        console.log($scope.user.id);
        $scope.p = 'Déconnection';

      } else {
        // No user is signed in.
        $scope.p = 'Connection/S\'inscrire';
        $scope.signOut = $state.go('141.signin');
        $scope.null = firebase.auth().currentUser;
        console.log('No user sign in.'+ $scope.null);
      }
      console.log($scope.null);
    });
  }])

  /**************************************
   *
   * Controller de la view Actualités
   *
   *************************************/
  .controller('NewsCtrl', ['$scope', '$state', '$ionicPopup', '$http', function ($scope, $state, $ionicPopup, $http) {

    //Récupération des données utlisateurs
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $scope.signIn = 'Se Déconnecter';

        // User is signed in
        $scope.user = {
          id: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous
        };

        //Condition si c'est une connection guest ou collaborateur
        if($scope.user.email === null){
          $scope.pseudo = 'Guest';
          $scope.collaborateur = 'un invité';

          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }
        } else {
          var values = $scope.user.email.split('@');
          var value1 = values[0];
          $scope.pseudo = value1;
          $scope.collaborateur = 'un collaborateur';

          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }
        }
      } else {
        // No user is signed in.
        console.log('No user sign in.');
        $scope.signIn = 'Se Connecter / S\'inscrire';
        $scope.signOut = function () {
          $state.go('signin');
        }
      }
    });

    //flux rss

    $http.get('http://www.videlio.com/actualites/feed/', {
      transformResponse: function (cnv) {
        var x2js = new X2JS();
        var aftCvn = x2js.xml_str2json(cnv);
        return aftCvn;
      }
    }).then(function (response) {
            console.log(response)
      $scope.results = response.data.rss.channel.item;
    });
  }])

  /**************************************
   *
   * Controller de la view Nous Contacter
   *
   *************************************/
  .controller('ContactUsCtrl', ['$scope', '$state', '$ionicPopup', function ($scope, $state, $ionicPopup) {

    $scope.mail = {};

    $scope.sendToMail = function () {
      var name = $scope.mail.name;
      var mail = $scope.mail.cc;
      var tel = $scope.mail.phone;
      var type = $scope.mail.type;
      var rma = $scope.mail.rma;
      var object = $scope.mail.object;
      var description = $scope.mail.description;
      var link = 'mailto:support-client@vidleio.comm?subject="'+object+' - '+type+' - '+rma+'"&body=Monsieur, Madame, %0D%0A\n%0D%0A\n'+description+'%0D%0A\n %0D%0A\n'+name+'. %0D%0A\n '+mail+'%0D%0A\n'+tel;

      console.log(link);
      window.location = link;
    };

    //Récupération des données utlisateurs
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $scope.signIn = 'Se Déconnecter';

        // User is signed in
        $scope.user = {
          id: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous
        };

        //Condition si c'est une connection guest ou collaborateur
        if($scope.user.email === null){
          $scope.pseudo = 'Guest';
          $scope.collaborateur = 'un invité';

          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }
        } else {
          var values = $scope.user.email.split('@');
          var value1 = values[0];
          $scope.pseudo = value1;
          $scope.collaborateur = 'un collaborateur';

          //Fonction de Déconnection
          $scope.signOut = function () {
            var confirm = $ionicPopup.confirm({
              title: 'Déconnection',
              template: 'Êtes vous sûre de vouloir vous déconnecter ?'
            });

            confirm.then(function (res) {
              if(res){
                firebase.auth().signOut().then(function () {
                  $state.go('signin');
                }).catch(function (error) {
                  alert('Votre déconnection connait des diffucltés, veuillez contacter l\'administrateur');
                  console.log(error);
                });
              } else {
                console.log(res);
              }
            });
          }
        }
      } else {
        // No user is signed in.
        console.log('No user sign in.');
        $scope.signIn = 'Se Connecter / S\'inscrire';
        $scope.signOut = function () {
          $state.go('signin');
        }
      }
    });
  }])

  /*************************************
   *
   * Controller de le view Commodités
   *
   *************************************/
  .controller('CommoditesCtrl', ['$scope', '$http', '$cordovaGeolocation', function($scope, $http, $cordovaGeolocation) {

    $scope.img = '';

    $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.918394,2.308227&rankby=distance&types=restaurant&key=AIzaSyAbBnTg2C8wC_cclHY4U1AGIYVIOJMDveY',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
        'Access-Control-Allow-Methods': 'GET, PUT, POST'
      }
    }).then(function (response) {
      $scope.results = {};
      $scope.results = response.data.results;
      console.log($scope.results);

    }).catch(function (error) {
      console.log('Error : ' + error);
    });

    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      var latLng = new google.maps.LatLng(48.918394, 2.308227);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      google.maps.event.addListenerOnce($scope.map, 'idle', function(){

        var marker, i;

        angular.forEach($scope.results, function (val, key) {
          i = new google.maps.LatLng(val.geometry.location.lat, val.geometry.location.lng);

          marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(val.geometry.location.lat, val.geometry.location.lng)
          });

          var test = val.name;

          var infoWindow = new google.maps.InfoWindow({
            content: test,
            position: i
          });

          google.maps.event.addListener(marker, 'click', function (marker) {

            console.log(infoWindow);
            //infoWindow.setContent(test);
            infoWindow.open($scope.map, marker[key]);
          });
        });
      });
    }, function(error){
      console.log("Could not get location : " + error);
    });

  }])

  /*******************
   *
   * Controller de la view détails
   *
   *******************/
  .controller('DetailsRestauCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {

    $scope.img = '';

    var placeID = $location.absUrl();
    $scope.detailsID = placeID.split('&restaurant=')[1];
    console.log($scope.detailsID);

    var promise = new Promise(function(resolve, reject) {
      resolve("I am the title set by the controller");
    });

    promise.then(function(myTitle){
      $scope.myTitle=myTitle;
      // Still does not work with the below uncommented
      // $scope.$apply();
    });

    $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/details/json?placeid='+$scope.detailsID+'&key=AIzaSyAbBnTg2C8wC_cclHY4U1AGIYVIOJMDveY',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
        'Access-Control-Allow-Methods': 'GET, PUT, POST'
      }
    }).then(function (response) {
      $scope.details = {};
      $scope.details = response.data.result;
      console.log($scope.details);
    })
  }])

  /*************************
   *
   * Controller de la view transport
   *
   *************************/
  .controller('TransportsCtrl', ['$scope', '$location', '$http', '$cordovaGeolocation', function ($scope, $location, $http, $cordovaGeolocation, $interval) {
    //Création de la map
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      var latLng = new google.maps.LatLng(48.918885, 2.310893);

      var mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      google.maps.event.addListenerOnce($scope.map, 'idle', function(){

        //Rquêtes des lignes RATP
        var urls = [
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/138/GRESILLONS-LAURENT_CELY/A+R',
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/177/tour_d\'asnieres_laurent_cely/A+R',
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/366/tour_d\'asnieres_laurent_cely/A+R',
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/138/Pierre_Boudou/A',
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/177/Pierre_Curie/A+R',
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/366/Pierre_Curie/A+R',
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/177/les_gresillons_rer/A+R',
          'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/366/les_gresillons_rer/R'
        ];

        var responses = [];
        var a = 0;

        for(i in urls){
          $http({
            method: 'GET',
            url: urls[i]
          }).then(function (res) {
            responses.push(res.data);
            a++;

            $scope.a = [];

            angular.forEach(responses, function (v, k) {
              $scope.ligne = v._metadata.call.split('bus/');
              $scope.ligne = $scope.ligne[1].split('/');

              if(v.result.schedules.length === 4){
                $scope.a.push({
                  ligne: $scope.ligne[0],
                  station: $scope.ligne[1],
                  aller: [
                    v.result.schedules[0],
                    v.result.schedules[1]
                  ],
                  retour: [
                    v.result.schedules[2],
                    v.result.schedules[3]
                  ]});
              } else {
                $scope.a.push({
                  ligne: $scope.ligne[0],
                  station: $scope.ligne[1],
                  aller: [
                    v.result.schedules[0],
                    v.result.schedules[1]
                  ],
                  retour: [
                    'null',
                    'null'
                  ]});
              }
            });

            $scope.a.sort(function(a, b) {
              return a.ligne > b.ligne;
            });

            $scope.a.sort();

            firebase.database().ref('transports/').update($scope.a);
          });
        }

        var ref = firebase.database().ref();

        ref.on("value", function(response) {
          $scope.firebase = response.val();

          //Requête de la ligne C RER
          $http({
            method: 'GET',
            url: 'https://api.sncf.com/v1/coverage/sncf/stop_points/stop_point%3AOCE%3ASP%3ARERC-87272146/departures?count=2&key=00ddb219-17cc-4b5a-886a-d6689a5a8d93',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
              'Access-Control-Allow-Methods': 'GET, PUT, POST'
            }
          }).then(function (res) {
            var rer = res.data.departures;

            var dateJson1 = rer[0].stop_date_time.departure_date_time.split('T');
            $scope.hours1 = dateJson1[1][0]+dateJson1[1][1]+'H'+dateJson1[1][2]+dateJson1[1][3];

            var dateJson2 = rer[1].stop_date_time.departure_date_time.split('T');
            $scope.hours2 = dateJson2[1][0]+dateJson2[1][1]+'H'+dateJson2[1][2]+dateJson2[1][3];

              //Création JSON transports
              $scope.stations = {
                fields: [
                  {
                    coord: {
                      lat: 48.917938,
                      lng: 2.30805
                    },
                    station_name: 'GRESILLONS - LAURENT CELY',
                    pictogrammes: ['138genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[1].aller[0].destination,
                    message1: $scope.firebase.transports[1].aller[0].message,
                    message2: $scope.firebase.transports[1].aller[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.91775,
                      lng: 2.3072
                    },
                    station_name: 'GRESILLONS - LAURENT CELY',
                    pictogrammes: ['138genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[1].retour[0].destination,
                    message1: $scope.firebase.transports[1].retour[0].message,
                    message2: $scope.firebase.transports[1].retour[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.9179182298342,
                      lng: 2.3088095215304976
                    },
                    station_name: 'TOUR D\'ASNIERES - LAURENT CELY',
                    pictogrammes: ['177genRVB.png', '366genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[2].aller[0].destination,
                    message1: $scope.firebase.transports[2].aller[0].message,
                    message2: $scope.firebase.transports[2].aller[1].message,
                    destination2: $scope.firebase.transports[6].aller[0].destination,
                    message3: $scope.firebase.transports[6].aller[0].message,
                    message4: $scope.firebase.transports[6].aller[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.9177785,
                      lng: 2.3088957
                    },
                    station_name: 'TOUR D\'ASNIERES - LAURENT CELY',
                    pictogrammes: ['177genRVB.png', '366genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[2].retour[0].destination,
                    message1: $scope.firebase.transports[2].retour[0].message,
                    message2: $scope.firebase.transports[2].retour[1].message,
                    destination2: $scope.firebase.transports[6].retour[0].destination,
                    message3: $scope.firebase.transports[6].retour[0].message,
                    message4: $scope.firebase.transports[6].retour[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.9170035,
                      lng: 2.308775
                    },
                    station_name: 'Pierre Boudou',
                    pictogrammes: ['138genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[0].aller[0].destination,
                    message1: $scope.firebase.transports[0].aller[0].message,
                    message2: $scope.firebase.transports[0].aller[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.91907,
                      lng: 2.3117
                    },
                    station_name: 'Pierre Curie',
                    pictogrammes: ['177genRVB.png', '366genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[3].aller[0].destination,
                    message1: $scope.firebase.transports[3].aller[0].message,
                    message2: $scope.firebase.transports[3].aller[1].message,
                    destination2: $scope.firebase.transports[7].aller[0].destination,
                    message3: $scope.firebase.transports[7].aller[0].message,
                    message4: $scope.firebase.transports[7].aller[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.919,
                      lng: 2.31205
                    },
                    station_name: 'Pierre Curie',
                    pictogrammes: ['177genRVB.png', '366genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[3].retour[0].destination,
                    message1: $scope.firebase.transports[3].retour[0].message,
                    message2: $scope.firebase.transports[3].retour[1].message,
                    destination2: $scope.firebase.transports[7].retour[0].destination,
                    message3: $scope.firebase.transports[7].retour[0].message,
                    message4: $scope.firebase.transports[7].retour[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.9200155,
                      lng: 2.31445
                    },
                    station_name: 'Les Gresillon RER',
                    pictogrammes: ['177genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[4].aller[0].destination,
                    message1: $scope.firebase.transports[4].aller[0].message,
                    message2: $scope.firebase.transports[4].aller[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.91995,
                      lng: 2.3148
                    },
                    station_name: 'Les Gresillon RER',
                    pictogrammes: ['177genRVB.png', '366genRVB.png'],
                    pictogrammesNULL: ['null', 'null1'],
                    destination: $scope.firebase.transports[4].retour[0].destination,
                    message1: $scope.firebase.transports[4].retour[0].message,
                    message2: $scope.firebase.transports[4].retour[1].message,
                    destination2: $scope.firebase.transports[5].aller[0].destination,
                    message3: $scope.firebase.transports[5].aller[0].message,
                    message4: $scope.firebase.transports[5].aller[1].message,
                    category: 'bus'
                  },
                  {
                    coord: {
                      lat: 48.920098,
                      lng: 2.31428
                    },
                    station_name: 'Gare Des Gresillons',
                    pictogrammes: ['CgenRVB.png'],
                    pictogrammesNULL: ['null', 'null1', 'null2'],
                    destination: rer[0].display_informations.direction,
                    message1: $scope.hours1,
                    destination2: rer[1].display_informations.direction,
                    message3: $scope.hours2,
                    category: 'rer'
                  }
                ]
              };

              var i, a;

              $scope.markers = [];

              for(i = 0; i < $scope.stations.fields.length; i++){

                a = {lat: $scope.stations.fields[i].coord.lat, lng: $scope.stations.fields[i].coord.lng};

                if($scope.stations.fields[i].pictogrammes.length === 1){

                  if($scope.stations.fields[i].pictogrammesNULL.length === 3){
                    var name = '<h5>'+$scope.stations.fields[i].station_name+'</h5>';
                    var img0 = '<div class="row"><img class="pictosRer col col-20" src="img/'+$scope.stations.fields[i].pictogrammes[0]+'" />';
                    var img1 = '<div class="col col-75"><h6>'+$scope.stations.fields[i].destination+'</h6><p>Arrive à : '+$scope.stations.fields[i].message1+'</p><div class="border"></div><h6>'+$scope.stations.fields[i].destination2+'</h6><p>Arrive à : '+$scope.stations.fields[i].message3+'</p></div></div>';

                    var imgName = name+img0+img1;
                  } else if ($scope.stations.fields[i].pictogrammesNULL.length === 1) {
                    var name = '<h5>'+$scope.stations.fields[i].station_name+'</h5>';
                    var img0 = '<div class="row"><img class="pictoAuto col col-20" src="img/'+$scope.stations.fields[i].pictogrammes[0]+'">';
                    var img1 = '<div class="col col-75"><p>Distance : '+$scope.stations.fields[i].distance+'m</p><div class="border"></div><p>Places : '+$scope.stations.fields[i].places+'</p><div class="border"></div><p>Recharges : '+$scope.stations.fields[i].recharges+'</p></div></div>';

                    var imgName = name+img0+img1;
                  } else {

                    var name = '<h5>'+$scope.stations.fields[i].station_name+'</h5>';
                    var img0 = '<div class="row"><img class="pictos col col-25" src="img/'+$scope.stations.fields[i].pictogrammes[0]+'" /><h6 class="hour col col-33">'+$scope.stations.fields[i].destination+'</h6><p class="col col-33">Arrive dans : '+$scope.stations.fields[i].message1+'<br/><br/>Le second : '+$scope.stations.fields[i].message2+'</p></div>';

                    var imgName = name+img0;
                  }

                } else {
                  var name = '<h5>'+$scope.stations.fields[i].station_name+'</h5>';
                  var img0 = '<div class="row"><img class="pictos col col-10" src="img/'+$scope.stations.fields[i].pictogrammes[0]+'" /><h6 class="hour col col-33">'+$scope.stations.fields[i].destination+'</h6><p class="hour col col-33">Arrive dans : '+$scope.stations.fields[i].message1+'<br/><br/>Le second : '+$scope.stations.fields[i].message2+'</p></div>';
                  var img1 = '<div class="border"></div>';
                  var img2 = '<div class="row"><img class="pictos col col-10" src="img/'+$scope.stations.fields[i].pictogrammes[1]+'" /><h6 class="hour col col-33">'+$scope.stations.fields[i].destination2+'</h6><p class="hour col col-33">Arrive dans : '+$scope.stations.fields[i].message3+'<br/><br/> Le second : '+$scope.stations.fields[i].message4+'</p></div>';

                  var imgName = name+img0+img1+img2;
                }

                $scope.marker = new google.maps.Marker({
                  map: $scope.map,
                  animation: google.maps.Animation.DROP,
                  position: a,
                  title: $scope.stations.fields[i].category,
                  html: imgName
                });

                $scope.markers.push($scope.marker);

                $scope.infoWindow = new google.maps.InfoWindow({
                  content: imgName,
                  position: a,
                  maxWidth: 270
                });

                for(var b = 0; b < $scope.markers.length; b++){
                  google.maps.event.addListener($scope.markers[i], 'click', function () {
                    $scope.infoWindow.setContent(this.html);
                    $scope.infoWindow.open($scope.map, this);
                  });
                }
              }

              $scope.testCheck = true;
              $scope.testCheck1 = true;
              $scope.testCheck2 = true;

              $scope.filterBus = function () {
                console.log($scope.testCheck);
                for(var c = 0; c < $scope.markers.length; c++){

                  if($scope.testCheck === false){
                    if($scope.markers[c].title === 'bus'){
                      $scope.markers[c].setMap(null);
                    }
                  } else {
                    if($scope.markers[c].title === 'bus'){
                      $scope.markers[c].setMap($scope.map);
                    }
                  }
                }
              };

              $scope.filterRer = function () {
                for(var c = 0; c < $scope.markers.length; c++){

                  if($scope.testCheck1 === false){
                    if($scope.markers[c].title === 'rer'){
                      $scope.markers[c].setMap(null);
                    }
                  } else {
                    if($scope.markers[c].title === 'rer'){
                      $scope.markers[c].setMap($scope.map);
                    }
                  }
                }
              };
          });
        }, function (error) {
          console.log("Error: " + error.code);
        });
      });
    }, function(error){
      console.log("Could not get location : " + error);
    });
  }])

  .controller('ResaSalleCtrl', ['$scope', function ($scope) {

  }]);
