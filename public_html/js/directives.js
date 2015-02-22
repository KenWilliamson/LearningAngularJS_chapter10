'use strict';

/* Directives */

var blogDirectives = angular.module('blogDirectives', []);
blogDirectives.directive('blgMenu', function () {
    return {
        restrict: 'A',
        templateUrl: 'partials/menu.html',
        link: function (scope, el, attrs) {
            scope.label = attrs.menuTitle;
            
        }
    };
});


