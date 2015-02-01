myApp.controller("instrumentCtrl", function($scope, Instrument) {
    $scope.instrumentPositions = Instrument.getInstruments();
    $scope.addInstrument = function(name) {
        Instrument.addInstrument(
            {
                name: name,
            }
        );
        delete $scope.name
    };
    $scope.updateInstrument = function (id) {
        Instrument.updateInstrument(id);
    };

    $scope.removeInstrument = function (id) {
        Instrument.removeInstrument(id);
    };
});