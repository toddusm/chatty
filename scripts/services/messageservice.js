'use strict';

angular.module('chattyApp')
  .factory('MessageService', function MessageService($http) {
    return {
     getMessages: function(){
       return $http({
         method: 'GET',
         url: "http://localhost:8888"
       }).then(function(res){
         // console.log(res);
         return res.data;
       })
     },
     addMessage: function(newMessage){
       return $http({
         method: 'POST',
         url: "http://localhost:8888",
         data: {message: newMessage}
       }).then(function(res){
         console.log('res.data.post', res);
         return res.data;
       }, function(err){return err})
     }
    }
  });
  
  
  //  .service('MessageService', function MessageService() {
  
  //    this.getMessages = function(){
      
  //    }
  // });
