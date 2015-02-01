myApp.controller("genreCtrl", function($scope, Genre) {
    $scope.genrePositions = Genre.getGenres();
    $scope.addGenre = function(name) {
        Genre.addGenre(
            {
                name: name,
            }
        );
        delete $scope.name
    };
    $scope.updateGenre = function (id) {
        Genre.updateGenre(id);
    };

    $scope.removeGenre = function (id) {
        Genre.removeGenre(id);
    };
});