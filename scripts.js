$(function() {

  console.log("Javascript file loaded.");

  // CONFIG HIGHTOUCH-------
  const WRITEKEY = `88970e1305b4b271e6e2d94a142d870450c2900ae7310b9cf8e3789e99ed520e`;
  const APIHOST = `us-east-1.hightouch-events.com`;
  // --------------

  // CONFIG INTERCOM-------
  const APPID = `cdl9dcei`;
  // --------------

  // Custom data attributes
  var seconds_now = parseInt(new Date().getTime() / 1000, 10);
  var seconds_20160128 = 1453939200;

  //HIGHTOUCH
  $("#btn-ht-boot-js").click( function()
     {
        !function(){var e=window.htevents=window.htevents||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Hightouch snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],e.factory=function(t){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(t),e.push(n),e}};for(var t=0;t<e.methods.length;t++){var n=e.methods[t];e[n]=e.factory(n)}e.load=function(t,n){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://cdn.hightouch-events.com/browser/release/v1-latest/events.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(o,r),e._loadOptions=n,e._writeKey=t},e.SNIPPET_VERSION="0.0.1",
        e.load(WRITEKEY,{apiHost:APIHOST}),
        e.page()}}();
     }
  );

  // EVENT
  $("#btn-ht-event").click( function()
     {
      // example
      window.htevents.track("invited-friend");
       console.log("HT Event 'invited-friend' has been triggered.");
     }
  );

  $("#btn-ht-event-custom").click( function()
     {
       var eventName = $("#input-ht-event-name").val();
       console.log(eventName);

       window.htevents.track(eventName);
       console.log("Event '" + eventName + "' has been triggered.");
     }
  );


  // INTERCOM
  $("#btn-boot-lead").click( function()
     {
      var settings = {
        app_id: APPID,
        alignment: 'right',
        horizontal_padding: 20,
        vertical_padding: 20
      }
       Intercom('boot', settings);
       console.log("New LEAD has been booted.");
     }
  );

  $("#btn-boot-user1").click( function()
     {

     Intercom('onUnreadCountChange', function(unreadCount) {
       console.log("Unread Count Changed: " + unreadCount);
     });

    // START Get UTM Params
    var querystring = document.location.search;

    querystring = querystring.substring(1); // Remove the leading "?"
    querystring = querystring.split('&'); // Split the string in utm variables

    var utms = {};

    for (var i = 0; i < querystring.length; i++) {
        var utm_part = querystring[i];

        if (utm_part) {
            var keyValue = utm_part.split("=");
            console.log("keyvalue: " + keyValue);

            if (keyValue.length > 1) {
              utms[keyValue[0]] = keyValue[1];
            }
        }
    }
    // END Get UTM Params

     var settings = {
         app_id: APPID,
         email: 'chandler.bing@example.com',
         created_at: 1234567890,
         name: 'Chandler Bing',
         user_id: 'friends1',
         date_now: seconds_now,
         date_20160128: seconds_20160128,
         "SET UP MEETING EMAIL SENT": true,
         new_attr: 2,
         new_attr_float: 2.12,
         html_attribute: "<p>Paragraph <br> second line</p>",
         ftp_link: "ftp://ftp.funet.fi/pub/standards/RFC/rfc959.txt",
         http_link: "http://www.google.com",
         https_link: "https://www.google.com",
         www_link: "www.google.com",
         naked_link: "google.com",
         mailto_link: "mailto:test@gmail.com",
         apostrophe: "It's been a great day!",
         new_attr: "wasda",
         role: "director of test",
         companies: [
           {
              id: 'cntrl123',
              name: 'Central Perk',
              created_at: 1234567890,
              plan: 'pro',
              monthly_spend: 10,
              upgraded_at: 1424941688
            },
            {
              id: 'trnsp123',
              name: 'Transponder Inc.',
              created_at: 1234567890,
              plan: 'pro',
              monthly_spend: 10,
              upgraded_at: 1424941688
             },
             {
              id: 'no_name_company',
              created_at: 1234567890,
              plan: 'lowest',
              monthly_spend: 10,
              upgraded_at: 1424941688
             }
          ]
     }

     if (utms["utm_campaign"]) { settings.utm_campaign = utms["utm_campaign"]; }
     if (utms["utm_medium"]) { settings.utm_medium = utms["utm_medium"]; }
     if (utms["utm_source"]) { settings.utm_source = utms["utm_source"]; }

     Intercom('boot', settings);
     console.log("User Chandler Bing has been booted.");

     }
  );

  $("#btn-boot-user2").click( function()
     {
       var settings = {
           app_id: APPID,
           email: 'monica.geller@example.com',
           created_at: 1234567890,
           name: 'Monica Geller',
           user_id: 'friends2',
           company: {
              id: 'cntrl123',
              name: 'Central Perk',
              created_at: 1234567890,
              plan: 'pro',
              monthly_spend: 10,
              upgraded_at: 1424941688
           }
       }

       Intercom('boot', settings);
       console.log("User Monica Geller has been booted.");
     }
   );

   $("#btn-boot-user3").click( function()
      {
        var settings = {
            app_id: APPID,
            email: 'phoebe.buffay@example.com',
            created_at: 1234567890,
            name: 'Phoebe Buffay',
            user_id: 'friends3',
            company: {
               id: 'cntrl123',
               name: 'Central Perk',
               created_at: 1234567890,
               plan: 'pro',
               monthly_spend: 10,
               upgraded_at: 1424941688
            }
        }

        Intercom('boot', settings);
        console.log("User Phoebe Buffay has been booted.");
      }
    );

    $("#btn-boot-user4").click( function()
       {
         var settings = {
             app_id: APPID,
             email: 'ross.geller@example.com',
             created_at: 1234567890,
             name: 'dr. Ross Geller',
             user_id: 'friends4',
             company: {
                id: 'cntrl123',
                name: 'Central Perk',
                created_at: 1234567890,
                plan: 'pro',
                monthly_spend: 10,
                upgraded_at: 1424941688
             }
         }

         Intercom('boot', settings);
         console.log("User Ross Geller has been booted.");
       }
     );

     $("#btn-boot-user5").click( function()
        {
          var settings = {
              app_id: APPID,
              email: 'rachel.green@example.com',
              created_at: 1234567890,
              name: 'Rachel Green',
              user_id: 'friends5',
              company: {
                 id: 'cntrl123',
                 name: 'Central Perk',
                 created_at: 1234567890,
                 plan: 'pro',
                 monthly_spend: 10,
                 upgraded_at: 1424941688
              }
          }

          Intercom('boot', settings);
          console.log("User Rachel Green has been booted.");
        }
      );

      $("#btn-boot-user6").click( function()
         {
           var settings = {
               app_id: APPID,
               email: 'joey.tribbiani@example.com',
               created_at: 1234567890,
               name: 'Joey Tribbiani',
               user_id: 'friends6',
               company: {
                  id: 'cntrl123',
                  name: 'Central Perk',
                  created_at: 1234567890,
                  plan: 'pro',
                  monthly_spend: 10,
                  upgraded_at: 1424941688
               }
           }

           Intercom('boot', settings);
           console.log("User Joey Tribbiani has been booted.");
         }
       );

    $("#btn-boot-user-random").click( function()
       {
         fname = Math.random().toString(36).substring(3,7);
         lname = Math.random().toString(36).substring(3,7);
         full_name = fname + " " + lname;
         email = fname + "." + lname + "@example.com";
         user_id = "id_" + fname;

         var settings = {
             app_id: APPID,
             email: email,
             created_at: 1234567890,
             name: full_name,
             user_id: user_id,
             company: {
                id: 'cntrl123',
                name: 'Central Perk',
                created_at: 1234567890,
                plan: 'pro',
                monthly_spend: 10,
                upgraded_at: 1424941688
             }
         }

         Intercom('boot', settings);
         console.log("Random User " + full_name + " has been booted.");
       }
     );

  // UPDATE with no changes
  $("#btn-update").click( function() {
    Intercom('update');
    console.log("'update' with no paramter has been triggered.");
  } );

  // Update with a changed custom attribute
  $("#btn-update-data").click( function() {
    Intercom('update', {"date_now": seconds_now});
    console.log("'update' with the current time as date_now custom attribute has been triggered.");
  });

  // SHOW and HIDE the Messenger
  $("#btn-hide").click( function() {
    Intercom('hide');
    console.log("'hide' has been triggered.");
  });

  $("#btn-show").click( function() {
    Intercom('show');
    console.log("'show' has been triggered.");
  });

  // SHOW and HIDE the Messenger standard launcher
  $("#btn-hide-launcher").click( function() {
    Intercom('update', {hide_default_launcher: true});
    console.log("'update' with {hide standard launcher: true} has been triggered.");
  });

  $("#btn-show-launcher").click( function() {
    Intercom('update', {hide_default_launcher: false});
    console.log("'update' with {hide standard launcher: false} has been triggered.");
  });

  // SHOW Message
  $("#btn-show-messages").click( function() {
    Intercom('showMessages');
    console.log("'showMessages' has been triggered.");
  });

  $("#btn-show-new-message").click( function() {
    Intercom('showNewMessage');
    console.log("'showNewMessage' has been triggered.");
  });

  $("#btn-show-new-message-with-content").click( function() {
    Intercom('showNewMessage', 'pre-populated content');
    console.log("'showNewMessage' with pre-populated content has been triggered.");
  });


  // ON Show / Hide
  $("#btn-on-hide").click( function()
     {
       Intercom('onHide', function() {
         console.log("'onHide' event has been called.");
       });
     }
  );

  $("#btn-on-show").click( function()
     {
       Intercom('onShow', function() {
         console.log("'onShow' event has been called.");
       });
     }
  );

  $("#btn-on-activator-click").click( function()
     {
       Intercom('onActivatorClick', function() {
         console.log("'onActivatorClick' event has been called.");
       });
     }
  );

  // EVENT
  $("#btn-event").click( function()
     {
       var metadata = {
         invitee_email: 'pi@example.com',
         invite_code: 'ADDAFRIEND',
         metadata_01: 'value01'
       };
       Intercom('trackEvent', 'invited-friend', metadata);
       console.log("Event 'invited-friend' has been triggered.");
     }
  );

  $("#btn-event-custom").click( function()
     {
       var eventName = $("#input-event-name").val();
       console.log(eventName);

       var metadata = {
         metadata_01: 'value01',
         metadata_02: 'value02',
       };
       Intercom('trackEvent', eventName, metadata);
       console.log("Event '" + eventName + "' has been triggered.");
     }
  );

  // SHUTDOWN
  $("#btn-shutdown").click( function() {
    Intercom('shutdown');
    console.log("'shutdown' has been called.");
  });

  // SEGMENT identify()
  $("#btn-seg-identify").click( function()
     {
       analytics.identify('friends7', {
         email: 'gunther@example.com',
         name: 'Gunther',
         user_id: "friends7",
         company: {
           id: 'cntrl123',
           name: 'Central Perk',
           createdAt: 'Thu Mar 24 2016 17:44:51 GMT+0000 (UTC)'
         },
         createdAt: 'Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)'
       });
       console.log("Segment 'identify' call has been triggered for user 'Gunther'.");
     }
  );

  // SEGMENT page()
  $("#btn-seg-page").click( function() {
    analytics.page();
    console.log("Segment 'page' call has been called for new lead.");
  });

});
