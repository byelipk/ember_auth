// for more details see: http://emberjs.com/guides/controllers/

App.ApplicationController = Ember.Controller.extend({
  currentUser: function() {
    return App.AuthManager.get('apiKey.user');
  }.property('App.AuthManager.apiKey'),

  isAuthenticated: function() {
    return App.AuthManager.isAuthenticated();  
  }.property('App.AuthManager.apiKey')

});
