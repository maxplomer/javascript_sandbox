JavascriptSandbox.Collections.Fiddles = Backbone.Collection.extend({
  model: JavascriptSandbox.Models.Fiddle,
  url: '/api/fiddles',

  comparator: function(fiddle) {
    return -fiddle.get('id');
  },

  getOrFetch: function (id) {
    var fiddles = this;

    var fiddle = this.get(id);
    if (fiddle) {
      fiddle.fetch();
    } else {
      fiddle = new JavascriptSandbox.Models.Fiddle({ id: id });
      fiddle.fetch({
        success: function () { fiddles.add(fiddle); }
      });
    }

    return fiddle;
  }

});

JavascriptSandbox.Collections.fiddles = new JavascriptSandbox.Collections.Fiddles();