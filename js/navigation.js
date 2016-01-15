var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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
    sref: "packagedetail",
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
    sendEmail: function(html,text,subject) {
      var emailMessage = {
        "key": atob("YmpzaEloMW5oTmxvbHhPQmpyUFRfQQ=="),
        "message": {
          "html": "<p>Example HTML content</p>",
          "text": "Example text content",
          "subject": "example subject",
          "from_email": "master@willnevergrowup.in",
          "from_name": "Enquiry for Website",
          "to": [{
            "email": "master@willnevergrowup.in",
            "name": "Chintan Shah",
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

      $http.post('https://mandrillapp.com/api/1.0/messages/send.json', emailMessage).success(function(data, status) {
        console.log(data);
        console.log(status);
      });

    }
  };
});
