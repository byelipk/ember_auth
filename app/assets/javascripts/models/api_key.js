// We never persist to or query the server for api keys so we do not inherit
// from DS.Model
App.ApiKey = Ember.Object.extend({
  access_token: '',
  user: null
});
