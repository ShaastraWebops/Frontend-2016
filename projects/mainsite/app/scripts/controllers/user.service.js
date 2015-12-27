'use strict';

angular.module('shaastra2016App')
  .factory('User', function ($resource) {
    return $resource('http://shaastra.org:8001/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      updateProfile: {
        method: 'PUT',
        params: {
          controller:'updateProfile'
        }
      }
	  });
  });
