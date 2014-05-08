// for more details see: http://emberjs.com/guides/controllers/

App.UsersNewController = Ember.Controller.extend({
  actions: {
    createUser: function() {
      var router = this.get('target');
      var data = this.getProperties('name', 'email', 'username', 'password', 'password_confirmation')
      var user = this.get('model');
      
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
          console.log(xhr)
          console.log(status)
          console.log(error)
        
        },

        complete: function(xhr, status) {
        
        }

      }).then(function(stuff) {
        alert(stuff)
      })
    }
  }
});
