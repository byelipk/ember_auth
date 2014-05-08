// For more information see: http://emberjs.com/guides/routing/

App.UsersNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controller.set('model', this.store.createRecord('user'));
  }
});

