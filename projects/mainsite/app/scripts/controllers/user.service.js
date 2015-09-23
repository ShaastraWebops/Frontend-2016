'use strict';

angular.module('shaastra2016App')
  .factory('User', function ($resource) {
    return $resource('http://0.0.0.0:8001/api/websiteUsers/:id/:controller', {
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
