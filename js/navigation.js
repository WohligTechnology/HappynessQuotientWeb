var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Happyness Quotient",
    classis: "active",
    anchor: "happyness",
    subnav: []
  }, {
    name: "Watch Video",
    classis: "active",
    anchor: "happinessquotient",
    subnav: []
  }, {
    name: "What's In Store",
    classis: "active",
    anchor: "packages",
    subnav: []
  }, {
    name: "How is Happyness Quotient Different?",
    classis: "active",
    anchor: "hqisunique",
    subnav: []
  }, {
    name: "What's next?",
    classis: "active",
    anchor: "services",
    subnav: []
  }, {
    name: "Let's Talk",
    classis: "active",
    anchor: "contact",
    subnav: []
  }, {
    name: "Visit Never Grow Up®",
    classis: "active",
    link: "http://www.willnevergrowup.com/",
    subnav: []
  }, {
    name: "Visit Our Blog",
    classis: "active",
    link: "http://www.willnevergrowup.com/blog/",
    subnav: []
  }, {
    name: "About Us",
    classis: "active",
    link: "http://www.willnevergrowup.com/about.html",
    subnav: []
  }, {
    name: "Store",
    classis: "active",
    link: "#/storedetail",
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
