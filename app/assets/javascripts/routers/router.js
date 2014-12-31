JavascriptSandbox.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'home',
    'users/new': 'newUser',
    'login': 'login',
    'fiddles/new': 'newFiddle'
  },

  newFiddle: function () {
    navbar();
    var current_user = new JavascriptSandbox.Models.CurrentUser();
    current_user.fetch();
    var newFiddle = new JavascriptSandbox.Models.Fiddle();

    //need to send 2 models!!!
    var model = new Backbone.Model();
    model.set({fiddle: newFiddle, current_user: current_user});

    var fiddleFormView = new JavascriptSandbox.Views.FiddleForm({
      model: model 
    });
    this._swapView(fiddleFormView);
  },

  home: function () {
    navbar();
    var homeView = new JavascriptSandbox.Views.Home();
    this._swapView(homeView);
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