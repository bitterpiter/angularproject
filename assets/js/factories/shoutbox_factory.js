myApp.factory("ShoutboxMessages", function($firebase, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI+"/shoutbox");
    var sync = $firebase(ref);
    var messages = sync.$asArray();        
    var getMessages = function() {
        return messages;
    }
    
    var addMessage = function(msg) {
        messages.$add(msg);
    }
    
    var removeMessage = function(id) {
        messages.$remove(id);
    }
    
    
    return {
        getMessages: getMessages,
        addMessage: addMessage,
        removeMessage: removeMessage,
    }
});