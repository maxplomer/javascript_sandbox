JavascriptSandbox.Views.FiddleForm = Backbone.View.extend({

  template: JST['fiddles/fiddle_form'],

  events: {
    "submit #codeform": "submit",
    "click #mybutton": "updateIframe"
  },

  initialize: function () {
    var fiddle = this.model.fiddle
    alert(fiddle);
  },

  render: function () {
    var renderedContent = this.template({
      fiddle: this.model.fiddle
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var fiddle = this.model;
    var current_user = this.options.model2;
    var user_id = current_user.attributes.id;

    var params = $(event.currentTarget).serializeJSON();
    var method_string = params["fiddle"]["method_string"];

    fiddle.save({
        user_id: user_id,
        method_string: method_string
      }, {
      success: function () {
        JavascriptSandbox.Collections.fiddles.add(fiddle);
      }
    });
  },

  updateIframe: function () {

    var prepareSource = function () {
      var $form = $("#codeform");
      var params = $form.serializeJSON();
      var src = params["fiddle"]["method_string"];

      return src;
    }

    var source = prepareSource();
    var iframe = document.querySelector('#output iframe'); //might need to be $('#output iframe')
    var iframe_doc = iframe.contentDocument;
   
    iframe_doc.open();
    iframe_doc.write(source);
    iframe_doc.close();
  }

  

});