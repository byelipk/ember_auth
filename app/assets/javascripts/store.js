App.Store = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});

// Allow smooth normalizing/serializing between Ember and Rails
App.ApplicationSerializer = DS.ActiveModelSerializer.extend({

});
