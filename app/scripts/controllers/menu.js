'use strict';

/**
 * @ngdoc function
 * @name nx_jokerankApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the nx_jokerankApp
 */
angular.module('nx_jokerankApp')
  .controller('MenuCtrl', function () {
    this.name = 'Nexus - Ranking de chistosos';
    this.users = [
     {
      name: 'Víctor',
      img: 'srx.png',
      nickname: 'El veterano',
      rating: 5
     },
     {
      name: 'Chuichui',
      img: 'chuichui.png',
      nickname: 'El veterinario',
      rating: 4
     },
     {
      name: 'Asorik',
      img: 'srx.png',
      nickname: 'El susurrador',
      rating: 3
     },
     {
      name: 'Keldath',
      img: 'keldath.png',
      nickname: 'El malvado',
      rating: 4
    },
     {
      name: 'Ariane',
      img: 'ariane.png',
      nickname: 'La matriarca',
      rating: 0
    },
     {
      name: 'Sirloss',
      img: 'sirloss.png',
      nickname: 'El tontete',
      rating: 1
    },
     {
      name: 'Deirius',
      img: 'srx.png',
      nickname: 'El pastelero',
      rating: 2
    }
    ];

    this.likeUp = function(user){
      user.rating += 1;
    }
    this.likeDown = function(user){
      user.rating -= 1;
    }
  });
