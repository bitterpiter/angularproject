myApp.factory("Instrument", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/instrument");    
    var sync = $firebase(ref);
    
    var instrument = sync.$asArray();
    var getInstruments = function() {
        return instrument;
    }
    
    var addInstrument = function(newInstrument) {
        instrument.$add(newInstrument);
    }
    
    var removeInstrument = function(id) {
        instrument.$remove(id);
    }
    
    var updateInstrument = function (id) {
        instrument.$save(id);
    };
    
    
    return {
        getInstruments: getInstruments,
        addInstrument: addInstrument,
        removeInstrument: removeInstrument,
        updateInstrument: updateInstrument,
    }
});