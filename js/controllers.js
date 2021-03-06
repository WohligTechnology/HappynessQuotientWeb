var headerController = {};

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'duScroll', 'base64'])

  .value('duScrollDuration', 1400)

  .controller('HomeCtrl', function ($scope, $state, TemplateService, NavigationService, $timeout, $stateParams, $document, $location, $uibModal, $base64) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.inside = 'unique';
    // $scope.measure = false;

    function makeAnimation(id) {
      if (!_.isEmpty(id)) {
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 0, 1400);
      }
    }

    function makeAnimationInside(id, inside) {
      if (!_.isEmpty(id) && !_.isEmpty(inside)) {
        var someElement = angular.element(document.getElementById(inside));
        $document.scrollToElement(someElement, 0, 1400);
      }
    }

    function forInside(id, inside) {
      if (!_.isEmpty(inside) && !_.isEmpty(id) && id == "happyness") {
        console.log("hello inside", inside)
        $scope.inside = inside;
        // switch (inside) {
        //   case "unique":
        //     $scope.measure = false;
        //     $scope.unique = true;
        //     break;
        //   case "measure":
        //     $scope.measure = true;
        //     $scope.unique = false;
        //     break;
        // }
      }
      if (!_.isEmpty(inside) && !_.isEmpty(id) && id == "contact") {
        switch (inside) {
          case "feedback":
            $scope.talk = true;
            break;
        }
      }
    }

    $scope.$on('$viewContentLoaded', function (event) {
      forInside($stateParams.id, $stateParams.inside);
      setTimeout(function () {
        makeAnimation($stateParams.id);
        makeAnimationInside($stateParams.id, $stateParams.inside);
      }, 100);
    });

    $scope.submitEnquiry = function (enquiry, enquiryForm) {
      if (enquiryForm.$valid) {
        $scope.thank = true;
        NavigationService.sendEnquiry(enquiry.name, enquiry.email, enquiry.organization, enquiry.tel);
      }
    };


    $scope.changeURL = function (id, inside) {
      if (inside) {
        $state.transitionTo('happy', {
          id: id,
          inside: inside
        }, {
          notify: false
        });
        makeAnimationInside(id, inside);
      } else {
        $state.transitionTo('homeid', {
          id: id
        }, {
          notify: false
        });
        makeAnimation(id);
      }


      $location.replace();
      headerController.closeMenu();
      forInside(id, inside);
    };

    $scope.changeMeasure = function (val) {
      $scope.inside = val;


    };
    $scope.changeUnique = function (val) {
      $scope.inside = val;


    };

    $scope.section = {
      one: "views/section/section1.html",
      two: "views/section/section2.html",
      three: "views/section/section3.html",
      four: "views/section/section4.html",
      five: "views/section/section5.html",
      six: "views/section/section6.html",
      seven: "views/section/section7.html"
    };

    //uimodal

    $scope.animationsEnabled = true;

    $scope.open = function () {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/section/video-modal.html',
        controller: 'VideoCtrl',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
      modalInstance.opened.then(function () {
        $timeout(function () {
          $('#vid')[0].play();
        }, 1000);
      });

    };

  })
  .controller('FaqCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService.changecontent("faq");
    $scope.menutitle = NavigationService.makeactive("faq");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.changeURL = function (id, inside) {
      if (inside) {
        $location.path("" + id + "/" + inside);
      } else {
        $location.path("" + id);
      }

    };

  })

  .controller('PackageDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.changeURL = function (id, inside) {
      if (inside) {
        $location.path("" + id + "/" + inside);
      } else {
        $location.path("" + id);
      }

    };
    $scope.template = TemplateService.changecontent("packagedetail");
    $scope.menutitle = NavigationService.makeactive("Packages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('FooterCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.sendSubEmail = function (email) {
      if ($scope.formSubscribe.$valid) {

        NavigationService.sendSubEmail(email);
        $scope.formDone = true;
      }
    };
  })

  .controller('VideoCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {

  })

  .controller('headerctrl', function ($scope, TemplateService) {
    headerController = $scope;
    $scope.template = TemplateService;

    $scope.showMenu = false;
    $scope.toggleMenu = function () {
      $scope.showMenu = !$scope.showMenu;
    };
    $scope.closeMenu = function () {
      $scope.showMenu = false;
    };
    $scope.toTheTop = function () {
      $(window).scrollTop(0, 1400);
    };

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });
  });