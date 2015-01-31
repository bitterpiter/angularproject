myApp.controller("shoutbox", function($scope, MenuItems) {
    $scope.menuItems = MenuItems.getItems();
    $scope.addItem = function(name, url) {
        MenuItems.addItem(
            {
                name: name,
                url: url,
            }
        );
        delete $scope.newMenuItemName;
        delete $scope.newMenuItemUrl;
    };
    $scope.updateItem = function (id) {
        MenuItems.updateItem(id);
    };

    $scope.removeItem = function (id) {
        MenuItems.removeItem(id);
    };
});