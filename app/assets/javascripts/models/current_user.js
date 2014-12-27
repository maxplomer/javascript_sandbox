JavascriptSandbox.Models.CurrentUser = Backbone.Model.extend({
  url: '/api/current_user'
});

// Finally, if you're NOT planning to persist more that one model of a 
// given type to the server or will be defining URLs for each model upon 
// their creation, you can directly assing a value to model.url.