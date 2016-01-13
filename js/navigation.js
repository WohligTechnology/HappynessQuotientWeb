var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Happyness Quotient",
    classis: "active",
    link: "happyness",
    subnav: []
  }, {
    name: "Watch Video",
    classis: "active",
    link: "watch",
    subnav: []
  }, {
    name: "What's In Store",
    classis: "active",
    link: "store",
    subnav: []
  }, {
    name: "How is Happyness Quotient Different?",
    classis: "active",
    link: "different",
    subnav: []
  }, {
    name: "What's next?",
    classis: "active",
    link: "next",
    subnav: []
  }, {
    name: "Let's Talk",
    classis: "active",
    link: "talk",
    subnav: []
  }, {
    name: "Visit Never Grow Up®",
    classis: "active",
    link: "http://www.willnevergrowup.com/",
    subnav: []
  }, {
    name: "Visit Our Blog",
    classis: "active",
    link: "#/blog",
    subnav: []
  }, {
    name: "About Us",
    classis: "active",
    link: "http://www.willnevergrowup.com/about.html",
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

  }
});
