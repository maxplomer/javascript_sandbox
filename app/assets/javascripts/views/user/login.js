JavascriptSandbox.Views.Login = Backbone.View.extend({
  events: {
    'click #submit': 'login'
  },

  render: function () {
    var content = this.template({ user: this.model, action: 'login' });
    this.$el.html(content);
    return this;
  },

  login: function (event) {
    event.preventDefault();
    var that = this;
    var userAttrs = this.$el.find('form').serializeJSON();
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: 'json',
      data: userAttrs,
      success: function (data, status) {
        Backbone.history.navigate('#', { trigger: true }); //later forward to user show
      },
      error: function (response, status) {
        that.$el.prepend(response.responseText);
      }
    });
  },

  template: JST['user/user_form']
});