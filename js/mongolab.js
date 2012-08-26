angular.module('mongolab', ['ngResource']).
factory('WorkoutResource', function($resource) {
  var WorkoutResource = $resource('https://api.mongolab.com/api/1/databases' +
    '/gymlog/collections/logs/:id',
    { apiKey: '5039893ee4b0d1e499082d1c',
      s:'{"date":-1}'},
    {
      update: { method: 'PUT' },
      find: {method: 'GET', isArray:true}
     }
    );

  WorkoutResource.prototype.update = function(cb) {
    return WorkoutResource.update({id: this._id.$oid},
      angular.extend({}, this, {_id:undefined}), cb);
  };

  WorkoutResource.prototype.dateString = function(workout) {
    return new Date(workout.date).toString("yyyy/M/d");
  }

  return WorkoutResource;
});