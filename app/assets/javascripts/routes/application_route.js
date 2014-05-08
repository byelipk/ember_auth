// For more information see: http://emberjs.com/guides/routing/

App.ApplicationRoute = Ember.Route.extend({
  init: function() {
    this._super();
    App.AuthManager = App.AuthManager.create();
  },

  actions: {
    logout: function() {
      App.AuthManager.reset();
      this.transitionTo('index');
    }
  }
});
