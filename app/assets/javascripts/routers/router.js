JavascriptSandbox.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'home',
    'users/new': 'newUser',
    'login': 'login'
  },

  home: function () {
    var homeView = new JavascriptSandbox.Views.Home();
    this._swapView(homeView);
  },

  login: function () {
    var user = new JavascriptSandbox.Models.User();
    var loginView = new JavascriptSandbox.Views.Login({ model: user });
    this._swapView(loginView);
  },

  newUser: function () {
    var newUser = new JavascriptSandbox.Models.User();
    var newUserView = new JavascriptSandbox.Views.NewUser({ model: newUser });
    this._swapView(newUserView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});