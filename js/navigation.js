var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {

  var emailMessage = {
    "key": atob("YmpzaEloMW5oTmxvbHhPQmpyUFRfQQ=="),
    "message": {
      "html": "",
      "text": "",
      "subject": "Subscribe for HappynessQuoitent.com",
      "from_email": "hq@willnevergrowup.in",
      "from_name": "HappynessQuoitent",
      "to": [{
        "email": "master@willnevergrowup.com",
        "name": "Master WillNeverGrowUp",
        "type": "to"
      }, {
        "email": "info@willnevergrowup.com",
        "name": "Info WillNeverGrowUp",
        "type": "to"
      }],
      "headers": {
        "Reply-To": "master@willnevergrowup.in"
      },
      "important": false,
      "track_opens": null,
      "track_clicks": null,
      "auto_text": null,
      "auto_html": null,
      "inline_css": null,
      "url_strip_qs": null,
      "preserve_recipients": null,
      "view_content_link": null,
      "tracking_domain": null,
      "signing_domain": null,
      "return_path_domain": null,
      "merge": true,
      "merge_language": "mailchimp",
      "global_merge_vars": [{
        "name": "merge1",
        "content": "merge1 content"
      }]
    },
    "async": false,
    "ip_pool": "Main Pool"
  };

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
    name: "What's Next?",
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
  },   {
    name: "Visit Never Grow Up®",
    classis: "active",
    link: "http://www.willnevergrowup.com/",
    target: "_blank",
    subnav: []
  }, {
    name: "Visit Our Blog",
    classis: "active",
    link: "http://blog.willnevergrowup.com/",
    target: "_blank",
    subnav: []
  }, {
    name: "About Us",
    classis: "active",
    link: "http://www.willnevergrowup.com/about",
    target: "_blank",
    subnav: []
  }, {
    name: "Packages",
    classis: "active",
    sref: "packagedetail",
    target: "_self",
    subnav: []
  },{
    name: "FAQs",
    classis: "active",
    sref: "faq",
    target: "_self",
    subnav: []
  }];

  return {
    getnav: function () {
      return navigation;
    },
    makeactive: function (menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
    sendSubEmail: function (email) {
      return $http.get('http://admin.willnevergrowup.com/index.php/json/sendSubscribe?email=' + email, {}, {
        withCredentials: true
      });

    },
    sendEnquiry: function (name, email, comment, phone) {

      return $http.get('http://admin.willnevergrowup.com/index.php/json/sendMail?name=' + name + '&email=' + email + '&comment=' + comment + '&phone=' + phone, {}, {
        withCredentials: true
      });

    }
  };
});
