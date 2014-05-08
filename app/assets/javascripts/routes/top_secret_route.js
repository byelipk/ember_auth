// For more information see: http://emberjs.com/guides/routing/

App.TopSecretRoute = App.AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('user');
  }
});
