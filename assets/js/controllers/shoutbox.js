myApp.controller("shoutboxCtrl", function($scope, ShoutboxMessages) {
    $scope.newMsgUser = "John Locke";
    $scope.shoutboxMessages = ShoutboxMessages.getMessages();
    $scope.addMessage = function(msg, newMsgUser) {
        ShoutboxMessages.addMessage({
            user: newMsgUser,
            date: Date.now(),
            msg: msg
        });
        delete $scope.newMessage;
    };
    $scope.removeMessage = function (id) {
        ShoutboxMessages.removeMessage(id);
    };
});