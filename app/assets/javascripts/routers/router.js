JavascriptSandbox.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'fiddlesIndex',
    'users/new': 'newUser',
    'login': 'login',
    'fiddles/new': 'newFiddle',
    'fiddles/:id': 'showFiddle',
    'myfiddles': 'userShow'
  },

  userShow: function () {

  },

  showFiddle: function (id) {
    navbar();
    var current_user = new JavascriptSandbox.Models.CurrentUser();
    current_user.fetch();
    var fiddle = JavascriptSandbox.Collections.fiddles.getOrFetch(id);

    //need to send 2 models!!!
    var model = new Backbone.Model();
    model.set({
      fiddle: fiddle, 
      current_user: current_user
    });

    var fiddleFormView = new JavascriptSandbox.Views.FiddleForm({
      model: model 
    });
    this._swapView(fiddleFormView);
  },

  fiddlesIndex: function () {
    navbar();
    JavascriptSandbox.Collections.fiddles.fetch();
    var fiddlesIndexView = new JavascriptSandbox.Views.FiddlesIndex({
      collection: JavascriptSandbox.Collections.fiddles
    });
    this._swapView(fiddlesIndexView);
  },

  newFiddle: function () {
    navbar();
    var current_user = new JavascriptSandbox.Models.CurrentUser();
    current_user.fetch();
    var newFiddle = new JavascriptSandbox.Models.Fiddle();

    var template = 
      "<!doctype html>\n" +
      "<html>\n" +
      "<head>\n" +
      "<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.1.js'></script>\n" +
      "<style>\n" +
      "/* Insert CSS here */\n\n" +
      "</style>\n" +
      "</head>\n" +
      "<body>\n" +
      "<!-- Insert HTML here -->\n\n" +
      "<script language='JavaScript'>\n" +
      "// Insert JavaScript here\n\n" +
      "</script>\n" +
      "</body>\n" +
      "</html>\n";

    newFiddle.set({
      method_string: template
    });

    //need to send 2 models!!!
    var model = new Backbone.Model();
    model.set({
      fiddle: newFiddle, 
      current_user: current_user
    });

    var fiddleFormView = new JavascriptSandbox.Views.FiddleForm({
      model: model 
    });
    this._swapView(fiddleFormView);
  },

  login: function () {
    navbar();
    var user = new JavascriptSandbox.Models.User();
    var loginView = new JavascriptSandbox.Views.Login({ 
      model: user 
    });
    this._swapView(loginView);
  },

  newUser: function () {
    navbar();
    var newUser = new JavascriptSandbox.Models.User();
    var newUserView = new JavascriptSandbox.Views.NewUser({ 
      model: newUser 
    });
    this._swapView(newUserView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});