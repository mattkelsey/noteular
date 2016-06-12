'use strict';

/* Controllers */

var noteularApp = angular.module('noteularApp', []);

noteularApp.controller('NoteListCtrl', NoteListFunc);

function NoteListFunc($scope) {
    $scope.controlTitleVal;
    $scope.controlContentVal;
    $scope.id;
    $scope.notes = [{"title": "Welcome to Noteular", "content": "Create a note below!", "id": "0"}];
}
