// For more information see: http://emberjs.com/guides/routing/

App.TimeRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('time', { into: 'application' })
  }
});
