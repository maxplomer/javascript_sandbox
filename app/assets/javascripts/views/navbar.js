JavascriptSandbox.Views.Navbar = Backbone.View.extend({

  template: JST['navbar'],

  events: {
    'click .sign-out': 'signOut',
    'click .new-sandbox': 'newSandbox'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({ 
      current_user: this.model 
    });
    this.$el.html(renderedContent);
    return this;
  },

  newSandbox: function (event) {
    event.preventDefault();
    Backbone.history.navigate('#/sandboxes/new', { trigger: true });
  },

  signOut: function (event) {
    event.preventDefault();
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function() {
        Backbone.history.navigate('#/login', { trigger: true });
      }
    });
  }

});