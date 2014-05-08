// for more details see: http://emberjs.com/guides/controllers/

App.UsersNewController = Ember.Controller.extend({
  reset: function() {
    this.setProperties({
      name: '',
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: null,
    });
  },

  actions: {
    createUser: function() {
      var self = this;
      var router = self.get('target');
      var data = self.getProperties('name', 'email', 'username', 'password', 'password_confirmation')
      var user = self.get('model');

      self.set('errorMessage', null);

      $.ajax({
        url: '/users',
        type: 'post',
        dataType: 'json',
        data: { user: data },

        beforeSend: function(xhr, settings) {

        },

        success: function(results, status, xhr) {
          App.AuthManager.authenticate(results.api_key.access_token, results.api_key.user_id);
          router.transitionTo('index');
        },

        error: function(xhr, status, error) {
          self.set('errorMessage', 'Please fill out the form before submitting.')

        },

        complete: function(xhr, status) {

        }

      }).then(function(stuff) {
        alert(stuff)
      })
    }
  }
});
