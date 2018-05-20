angular
  .module('UserApp')
  .factory('UsersService', function ($resource, $http) {
    return $resource('https://jsonplaceholder.typicode.com/users/:userId', {
      userId: '@userId'
    }, 
    {
      'update': {
        method: 'PUT'
      },   
      'getPosts': {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users/:userId/posts',
        isArray: true
      }
    }
  );
  });
  