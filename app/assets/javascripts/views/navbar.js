JavascriptSandbox.Views.Navbar = Backbone.View.extend({

  template: JST['navbar'],

  events: {
    'click .sign-out': 'signOut',
    'click .sign-in': 'signIn',
    'click .sign-up': 'signUp'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  logIn: function () {
    Backbone.history.navigate('#/login', { trigger: true });
  },

  signUp: function () {
    Backbone.history.navigate('#/users/new', { trigger: true });
  },

  render: function () {
    var renderedContent = this.template({ 
      current_user: this.model 
    });
    this.$el.html(renderedContent);
    return this;
  },


  signOut: function (event) {
    event.preventDefault();
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function(result) {
        Backbone.history.navigate('#', { trigger: true });
      }
    });
  }

});