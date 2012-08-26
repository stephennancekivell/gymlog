angular.module('mongolab', ['ngResource']).
factory('WorkoutResource', function($resource) {
  var WorkoutResource = $resource('https://api.mongolab.com/api/1/databases' +
    '/gymlog/collections/logs/:id',
    { apiKey: '5039893ee4b0d1e499082d1c'},
    {
      update: { method: 'PUT' },
      find: {method: 'GET', isArray:true}
      //query: {method: 'GET', params:{user: 'paul'}, isArray:true}
     }
    );

  WorkoutResource.prototype.update = function(cb) {
    return WorkoutResource.update({id: this._id.$oid},
      angular.extend({}, this, {_id:undefined}), cb);
  };

  WorkoutResource.prototype.find = function (cb) {
    console.log('about to find');
    return WorkoutResource.find({id:'lol'},cb);
  };

  return WorkoutResource;
});