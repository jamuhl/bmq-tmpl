require([
  "namespace",

  // Libs
  "jquery",
  "backbone",

  // Modules
  "modules/example",
  "modules/page1",
  "modules/page2"
],

function(ns, $, Backbone, Example) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"//,
      //":hash": "index"
    },

    index: function(hash) {
      var route = this;
      var tutorial = new Example.Views.Tutorial();

      app.main.show(tutorial);
      // Attach the tutorial to the DOM
      // tutorial.render().done(function(el) {
      //   $("#main").html(tutorial.el);

      //   // Fix for hashes in pushState and hash fragment
      //   if (hash && !route._alreadyTriggered) {
      //     // Reset to home, pushState support automatically converts hashes
      //     Backbone.history.navigate("", false);

      //     // Trigger the default browser behavior
      //     location.hash = hash;

      //     // Set an internal flag to stop recursive looping
      //     route._alreadyTriggered = true;
      //   }
      // });
    }
  });

  // Shorthand the application namespace
  var app = ns.app;

  app.addRegions({
      main: '#main'
  });

  app.addInitializer(function(options) {
    // we just have to override eventNameAttr:
    Backbone.CQRS.hub.init({ 
        eventNameAttr: 'event',
        parseEvent: function(msg) {
            //msg.payload.revision = msg.head.revision;
            return msg;
        },
        getCommandId: function(data) {
            return data.commandId;
        }
    });
  });

  app.addInitializer(function(options) {
      // will instanciate all registered routers
      // app.appRouter = new calix.routers.AppRouter();
      app.router = new Router();

      // start backbone
      Backbone.history.start(/*{ pushState: true }*/);
  });

  // Treat the jQuery ready function as the entry point to the application.
  // Inside this function, kick-off all initialization, everything up to this
  // point should be definitions.
  $(function() {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.start();
  });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router.  If the link has a data-bypass
  // attribute, bypass the delegation completely.
  // $(document).on("click", "a:not([data-bypass])", function(evt) {
  //   // Get the anchor href and protcol
  //   var href = $(this).attr("href");
  //   var protocol = this.protocol + "//";

  //   // Ensure the protocol is not part of URL, meaning its relative.
  //   if (href && href.slice(0, protocol.length) !== protocol &&
  //       href.indexOf("javascript:") !== 0) {
  //     // Stop the default event to ensure the link will not cause a page
  //     // refresh.
  //     evt.preventDefault();

  //     // `Backbone.history.navigate` is sufficient for all Routers and will
  //     // trigger the correct events.  The Router's internal `navigate` method
  //     // calls this anyways.
  //     Backbone.history.navigate(href, true);
  //   }
  // });

});
