'use strict';

/**
 * @ngdoc service
 * @name nx_jokerankApp.userFinder
 * @description
 * # userFinder
 * Service in the nx_jokerankApp.
 */
angular.module('nx_jokerankApp')
  .service('userFinder', function () {
    this.getUsers = function(){
      return $.get( 'users/users.json' );
    };
  });
