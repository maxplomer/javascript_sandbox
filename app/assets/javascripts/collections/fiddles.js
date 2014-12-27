JavascriptSandbox.Collections.Fiddles = Backbone.Collection.extend({
  model: JavascriptSandbox.Models.Fiddle,
  url: '/api/fiddles',


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

FinanceClone.Collections.fiddles = new FinanceClone.Collections.Fiddles();