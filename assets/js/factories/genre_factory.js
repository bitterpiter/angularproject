myApp.factory("Genre", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/genre");    
    var sync = $firebase(ref);
    
    var genre = sync.$asArray();
    var getGenres = function() {
        return genre;
    }
    
    var addGenre = function(newGenre) {
        genre.$add(newGenre);
    }
    
    var removeGenre = function(id) {
        genre.$remove(id);
    }
    
    var updateGenre = function (id) {
        genre.$save(id);
    };
    
    
    return {
        getGenres: getGenres,
        addGenre: addGenre,
        removeGenre: removeGenre,
        updateGenre: updateGenre,
    }
});