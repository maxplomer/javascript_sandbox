JavascriptSandbox.Views.FiddlesIndex = Backbone.View.extend({

  template: JST['fiddles/fiddles_index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      fiddles: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },

});
