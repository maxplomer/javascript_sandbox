JavascriptSandbox.Views.FiddleForm = Backbone.View.extend({

  template: JST['fiddles/fiddle_form'],

  events: {
    "submit #codeform": "submit",
    "click #mybutton": "updateIframe"
  },

  initialize: function () {
    this.listenTo(this.model.attributes.fiddle, "sync", this.render);
    this.listenTo(this.model.attributes.current_user, "sync", this.render);
  },

  render: function () {
    require(['ace/ace', 'ace/mode/html'], function(ace, html) {
      var editor = ace.edit("editor");
      var HtmlMode = html.Mode;
      editor.getSession().setMode(new HtmlMode());
      var textarea = $('textarea[name="fiddle[method_string]"]').hide();
      editor.getSession().setValue(textarea.val());
      editor.getSession().on('change', function(){
        textarea.val(editor.getSession().getValue());
      });
    });
    var renderedContent = this.template({
      model: this.model.attributes
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var fiddle = this.model.attributes.fiddle;
    var current_user = this.model.attributes.current_user;
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