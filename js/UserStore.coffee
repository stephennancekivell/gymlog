@App.factory('UserStore', () ->
  STORAGE_ID = 'User'

  {
    get: () ->
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '{}')
    
    put: ( user ) ->
      localStorage.setItem(STORAGE_ID, JSON.stringify(user))
  }
)