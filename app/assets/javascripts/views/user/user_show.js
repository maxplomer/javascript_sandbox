JavascriptSandbox.Views.UserShow = Backbone.View.extend({

  template: JST['user/user_show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      fiddles: this.model.attributes
    });
    this.$el.html(renderedContent);
    return this;
  }
});