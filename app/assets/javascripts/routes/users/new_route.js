// For more information see: http://emberjs.com/guides/routing/

App.UsersNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },

  setupController: function(controller, model) {
    this.controller.set('model', model);
    this.controller.reset();
  }
});
