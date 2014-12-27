JavascriptSandbox.Views.FiddleForm = Backbone.View.extend({

  template: JST['fiddles/fiddle_form'],

  events: {
    "submit #codeform": "submit",
    "click #mybutton": "updateIframe"
  },


  render: function () {
    var renderedContent = this.template({
      fiddle: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function () {

  },

  updateIframe: function () {


  }

});