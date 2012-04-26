define([
  // Libs
  "jquery",
  "use!underscore",
  "backstrapp/backstrapp",
  "use!backbone",
  "preconditions"
],

function($, _, backstrapp) {
  
  var ns = _.extend({

    // Create a custom object with a nested Views object
    module: function(additionalProps) {
      return _.extend({ Views: {} }, additionalProps);
    }

  }, backstrapp);

  console.log(ns);

  return ns;
});
