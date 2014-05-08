// for more details see: http://emberjs.com/guides/models/defining-models/

App.AuthManager = Ember.Object.extend({

  // Load current user is cookies exist and are valid
  init: function() {
    this._super(); // Or funny things will happen!
    var accessToken = $.cookie('access_token');
    var authUserID = $.cookie('auth_user');
    if (!Ember.isEmpty(accessToken) && !Ember.isEmpty(authUserID)) {
      this.authenticate(accessToken, authUserID);
    }
  },

  // Determine if user is currently authenticated
  isAuthenticated: function() {
    return !Ember.isEmpty(this.get('apiKey.accessToken')) && !Ember.isEmpty(this.get('apiKey.user'));
  },

  // Authenticate the user. Once they are authenticated, set the access token to be submitted with all
  // future AJAX requests to the server.
  authenticate: function(accessToken, userID) {
    // Get a handle on the application route to access the data store
    context = App.__container__.lookup('route:application');

    // Set the auth header before we access the data store and make an xhr request
    $.ajaxSetup({
      headers: { 'Authorization': 'Bearer ' + accessToken }
    });

    var user = context.store.find('user', userID);
    this.set('apiKey', App.ApiKey.create({
      accessToken: accessToken,
      user: user
    }));
  },

  // Log out the user
  reset: function() {
    App.__container__.lookup("route:application").transitionTo('sessions.new');
    Ember.run.sync();
    Ember.run.next(this, function() {
      this.set('apiKey', null);
      $.ajaxSetup({
        headers: { 'Authorization': 'Bearer none' }
      });
    });
  },

  // Ensure that when the apiKey changes, we store the data in cookies in order for us to load
  // the user when the browser is refreshed.
  apiKeyObserver: function() {
    if (Ember.isEmpty(this.get('apiKey'))) {
      $.removeCookie('accessToken');
      $.removeCookie('authUserID');
    } else {
      $.cookie('accessToken', this.get('apiKey.accessToken'));
      $.cookie('authUserID', this.get('apiKey.user.id'));
    }
  }.observes('apiKey')
});

// Reset the authentication if any ember data request returns a 401 unauthorized error
DS.rejectionHandler = function(reason) {
  if (reason.status === 401) {
    App.AuthManager.reset();
  }
  throw reason;
};
