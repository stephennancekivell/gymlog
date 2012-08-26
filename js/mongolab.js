angular.module('mongolab', ['ngResource']).
factory('Log', function($resource) {
  var Log = $resource('https://api.mongolab.com/api/1/databases' +
    '/gymlog/collections/logs/:id',
    { apiKey: '5039893ee4b0d1e499082d1c' },
    { update: { method: 'PUT' } }
    );

  Log.prototype.update = function(cb) {
    return Project.update({id: this._id.$oid},
      angular.extend({}, this, {_id:undefined}), cb);
  };

  return Log;
});