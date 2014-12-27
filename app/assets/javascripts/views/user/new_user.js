JavascriptSandbox.Views.NewUser = Backbone.View.extend({

  events: {
    'click #submit': 'signUp'
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  signUp: function (event) {
    event.preventDefault();
    var that = this;
    var userAttrs = this.$el.find('form').serializeJSON();
    this.model.save(userAttrs, {
      success: function () {
        Backbone.history.navigate('#', { trigger: true }) 
      },
      error: function (response, status) {
        that.$el.prepend(response.responseText);
      }
    });
  },

  template: JST['user/user_form']
});