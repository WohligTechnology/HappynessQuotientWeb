var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Happyness Quotient",
    classis: "active",
    anchor: "happyness",
    target: "_self",
    subnav: []
  }, {
    name: "Watch Video",
    classis: "active",
    anchor: "happinessquotient",
    target: "_self",
    subnav: []
  }, {
    name: "What's In Store?",
    classis: "active",
    anchor: "packages",
    target: "_self",
    subnav: []
  }, {
    name: "How is Happyness Quotient Different?",
    classis: "active",
    anchor: "hqisunique",
    target: "_self",
    subnav: []
  }, {
    name: "What's next?",
    classis: "active",
    anchor: "services",
    target: "_self",
    subnav: []
  }, {
    name: "Let's Talk",
    classis: "active",
    anchor: "contact",
    target: "_self",
    subnav: []
  }, {
    name: "Visit Never Grow Up®",
    classis: "active",
    link: "http://www.willnevergrowup.com/",
    target: "_blank",
    subnav: []
  }, {
    name: "Visit Our Blog",
    classis: "active",
    link: "http://www.willnevergrowup.com/blog/",
    target: "_blank",
    subnav: []
  }, {
    name: "About Us",
    classis: "active",
    link: "http://www.willnevergrowup.com/about.html",
    target: "_blank",
    subnav: []
  }, {
    name: "Packages",
    classis: "active",
    link: "#/packagedetail",
    target: "_self",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
