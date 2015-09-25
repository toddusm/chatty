'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    var messages = [];
  
    MessageService.getMessages().then(function(response) {    
      messages.push(response);
      $scope.messages = messages;
    });
    $scope.addMessage = function(newMessage) {
      console.log(newMessage);
      messages.push(newMessage);
      MessageService.addMessage(newMessage).then(function(res){
        messages = res;
        $scope.messages = messages;
        console.log(res)
      }, function(err){console.log(err)});
    }
});
