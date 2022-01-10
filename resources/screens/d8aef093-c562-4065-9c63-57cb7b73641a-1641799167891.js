jQuery("#simulation")
  .on("click", ".s-d8aef093-c562-4065-9c63-57cb7b73641a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8264f917-ead4-47f3-a33b-81934a947666",
                    "transition": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/026715ab-7601-4d44-944b-934a7ee39975",
                    "transition": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d8aef093-c562-4065-9c63-57cb7b73641a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d8aef093-c562-4065-9c63-57cb7b73641a #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFD233"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_2").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Rectangle_2") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d8aef093-c562-4065-9c63-57cb7b73641a #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFD233"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d8aef093-c562-4065-9c63-57cb7b73641a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d8aef093-c562-4065-9c63-57cb7b73641a #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "linear-gradient(0.0% 50.0% to 100.0% 50.0%, #FFD233 0.0%, #F44646 100.0%)"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-d8aef093-c562-4065-9c63-57cb7b73641a #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "linear-gradient(0.0% 50.0% to 100.0% 50.0%, #FFD233 0.0%, #F44646 100.0%)"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d8aef093-c562-4065-9c63-57cb7b73641a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    }
  });