myApp.factory("Artist", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/artist");    
    var sync = $firebase(ref);
    
    var Artist = sync.$asArray();
    var getArtists = function() {
        return Artist;
    }
    
    var addArtist = function(newArtist) {
        Artist.$add(newArtist);
    }
    
    var removeArtist = function(id) {
        Artist.$remove(id);
    }
    
    var updateArtist = function (id) {
        Artist.$save(id);
    };
    
    
    return {
        getArtists: getArtists,
        addArtist: addArtist,
        removeArtist: removeArtist,
        updateArtist: updateArtist,
    }
});