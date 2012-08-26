angular.module('mongolab', ['ngResource']).
factory('LogResource', function($resource) {
  var LogResource = $resource('https://api.mongolab.com/api/1/databases' +
    '/gymlog/collections/logs/:id',
    { apiKey: '5039893ee4b0d1e499082d1c'},
    {
      update: { method: 'PUT' },
      //query: {method: 'GET'}
      //query: {method: 'GET', params:{user: 'paul'}, isArray:true}
     }
    );

  LogResource.prototype.update = function(cb) {
    return LogResource.update({id: this._id.$oid},
      angular.extend({}, this, {_id:undefined}), cb);
  };

  return LogResource;
});