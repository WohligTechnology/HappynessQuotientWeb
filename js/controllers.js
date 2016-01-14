var headerController = {};

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'duScroll'])

.value('duScrollDuration', 1400)

.controller('HomeCtrl', function($scope, $state, TemplateService, NavigationService, $timeout, $stateParams, $document, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    function makeAnimation(id) {
      if (!_.isEmpty(id)) {
        var someElement = angular.element(document.getElementById(id));
        $document.scrollToElement(someElement, 0, 1400);
      }
    }

    $scope.$on('$viewContentLoaded', function(event) {
      setTimeout(function() {
        makeAnimation($stateParams.id);
      }, 100);
    });


    $scope.changeURL = function(id) {
      $state.transitionTo('homeid', {
        id: id
      }, {
        notify: false
      });
      makeAnimation(id);
      $location.replace();
      headerController.closeMenu();
    };

    $scope.changeMeasure = function(val) { $scope.measure = val; }
    $scope.changeUnique = function(val) { $scope.unique = val; }

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
  .controller('StoreCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.changeURL = function(id) {
      $location.path(""+id);
    };
    $scope.template = TemplateService.changecontent("store");
    $scope.menutitle = NavigationService.makeactive("Store");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
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
