myApp.controller("artistCtrl", function($scope, Artist) {
    $scope.artistPositions = Artist.getArtists();
    $scope.addArtist = function(firstName, lastName, instrument, genre) {
        Artist.addArtist(
            {
                firstName: firstName,
                lastName: lastName,
                instrument: instrument,
                genre: genre,
            }
        );
        delete $scope.firstName;
        delete $scope.lastName;
        
    };
    $scope.updateArtist = function (id) {
        Artist.updateArtist(id);
    };

    $scope.removeArtist = function (id) {
        Artist.removeArtist(id);
    };
});