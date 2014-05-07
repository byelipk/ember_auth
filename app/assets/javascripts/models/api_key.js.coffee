# for more details see: http://emberjs.com/guides/models/defining-models/

EmberAuth.ApiKey = DS.Model.extend
  user: DS.belongsTo 'EmberAuth.User'
  accessToken: DS.attr 'string'
  scope: DS.attr 'string'
  expiredAt: DS.attr 'date'
  createdAt: DS.attr 'date'
