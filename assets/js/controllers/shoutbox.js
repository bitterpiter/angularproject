myApp.controller("shoutbox", function($scope, ShoutboxMessages) {
    $scope.shoutboxMessages = ShoutboxMessages.getMessages();
    $scope.addMessage = function(msg) {
        ShoutboxMessages.addMessage(
            {
                user: 1,
                date: Date.now(),
                msg: msg
            }
        );
        delete $scope.newMessage;
    };
    $scope.removeItem = function (id) {
        ShoutboxMessages.removeMsg(id);
    };
});