(function(window, undefined) {
  var dictionary = {
    "8264f917-ead4-47f3-a33b-81934a947666": "Kat.Badminton",
    "f9c6f4d1-3a16-436f-8b24-350f76335b94": "BookBadmin2",
    "bae9f095-73b9-40a5-95d2-c7d10245313e": "BookBadmin1",
    "d8aef093-c562-4065-9c63-57cb7b73641a": "AfterLogin",
    "026715ab-7601-4d44-944b-934a7ee39975": "Kat.Futsal",
    "556a4417-d03a-4fbb-9b59-c6959179204e": "LogIn",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "fa67e1e5-a2b0-400c-9be8-f2a2c58d3836": "Sign Up",
    "0a187d96-a8c1-4370-b43a-f7113df0c725": "BookBadmin3",
    "a24d577e-1e84-4e85-8bbb-e23ed50af056": "bookBadmin",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);