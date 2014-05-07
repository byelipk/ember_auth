App.ApiKey = DS.Model.extend({
  user: DS.belongsTo('user'),
  accessToken: DS.attr('string'),
  scope: DS.attr('string'),
  expiredAt: DS.attr('date'),
  createdAt: DS.attr('date')
});
