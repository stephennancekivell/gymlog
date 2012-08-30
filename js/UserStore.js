App.factory( 'UserStore', function() {
  var STORAGE_ID = 'User';

  return {
    get: function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '{}');
    },

    put: function( user ) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(user));
    }
  };
});