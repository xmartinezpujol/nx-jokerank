'use strict';

/**
 * @ngdoc function
 * @name nx_jokerankApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the nx_jokerankApp
 */
angular.module('nx_jokerankApp')
  .controller('MenuCtrl', ['userFinder', function (userlist) {
    this.name = 'Nexus - Ranking de chistosos';
    var vm = this;

    userlist.getUsers().then(function(data) {
      vm.users = data;
    });

    this.likeUp = function(user){
      user.rating += 1;
    };
    this.likeDown = function(user){
      user.rating -= 1;
    };
  }]);
