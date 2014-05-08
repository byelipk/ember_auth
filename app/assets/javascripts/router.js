// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  // this.resource('posts');
  this.resource('sessions', function() {
    this.route('new');
  });

  this.resource('users', function() {
    this.route('new');
  });

  this.route('top_secret');

  // Just for playing around with routes
  this.route('time');
});
