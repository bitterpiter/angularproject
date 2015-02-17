var myApp = angular.module("adminPanel", ["ui.router", "firebase"]);

myApp.constant('FIREBASE_URI', "https://website-techs.firebaseio.com/");
myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('under', {
            url: '/under',
            templateUrl: 'templates/under.html',
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.html'
        })
        .state('add-item', {
            url: '/add-item',
            templateUrl: 'templates/add-item.html',
            controller: 'ListCtrl'
        })
        .state('list.item', {
            url: '/:item',
            templateUrl: 'templates/list.item.html',
            controller: function($scope, $stateParams) {
                $scope.item = $stateParams.item;
            }
        });
    $urlRouterProvider.otherwise('/dashboard');
});