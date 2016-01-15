var headerController = {};

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'duScroll'])

.value('duScrollDuration', 1400)

.controller('HomeCtrl', function($scope, $state, TemplateService, NavigationService, $timeout, $stateParams, $document, $location) {
    //Used to name the .html file



    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    console.log($scope.navigation);
    function makeAnimation(id) {
      if (!_.isEmpty(id)) {
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 0, 1400);
      }
    }

    function forInside(id, inside) {
      if (!_.isEmpty(inside) && !_.isEmpty(id) && id == "happyness") {
        switch (inside) {
          case "unique":
            $scope.measure = false;
            $scope.unique = true;
            break;
          case "measure":
            $scope.measure = true;
            $scope.unique = false;
            break;
        }
      }
      if (!_.isEmpty(inside) && !_.isEmpty(id) && id == "contact") {
        switch (inside) {
          case "feedback":
            $scope.talk = true;
            break;
        }
      }
    }

    $scope.$on('$viewContentLoaded', function(event) {
      forInside($stateParams.id, $stateParams.inside);
      setTimeout(function() {
        makeAnimation($stateParams.id);
      }, 100);
    });

    $scope.submitEnquiry = function(enquiry, enquiryForm) {
      if (enquiryForm.$valid) {
        $scope.thank = true;
        NavigationService.sendEnquiry(enquiry.name,enquiry.email,enquiry.organization,enquiry.tel);
      }
    };


    $scope.changeURL = function(id, inside) {
      if (inside) {
        $state.transitionTo('happy', {
          id: id,
          inside: inside
        }, {
          notify: false
        });

      } else {
        $state.transitionTo('homeid', {
          id: id
        }, {
          notify: false
        });
      }

      makeAnimation(id);
      $location.replace();
      headerController.closeMenu();
      forInside(id, inside);
    };

    $scope.changeMeasure = function(val) {
      $scope.measure = val;
    };
    $scope.changeUnique = function(val) {
      $scope.unique = val;
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
  })
  .controller('PackageDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.changeURL = function(id, inside) {
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
  .controller('FooterCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.sendSubEmail = function(email) {
      if ($scope.formSubscribe.$valid) {

        NavigationService.sendSubEmail(email);
        $scope.formDone = true;
      }
    };
  })

.controller('headerctrl', function($scope, TemplateService) {
  headerController = $scope;
  $scope.template = TemplateService;

  $scope.showMenu = false;
  $scope.toggleMenu = function() {
    $scope.showMenu = !$scope.showMenu;
  };
  $scope.closeMenu = function() {
    $scope.showMenu = false;
  };
  $scope.toTheTop = function() {
    $(window).scrollTop(0, 1400);
  };

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
});
