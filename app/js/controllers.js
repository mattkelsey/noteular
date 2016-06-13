'use strict';

/* Controllers */

var noteularApp = angular.module('noteularApp', ['ngAnimate']);

noteularApp.controller('NoteListCtrl', NoteListFunc);

function NoteListFunc($scope) {
    $scope.notes = [{"title": "Welcome to Noteular", "content": "Create a note below!", "id": "0"}];

    $scope.makeNote = function (title, content) {
        $scope.notes.push({'title': title, 'content': content});
        $scope.controlTitleVal = "";
        $scope.controlContentVal = "";
    }

    $scope.handleNoteKey = function(event) {
        if(event.keyCode == 13) {
            $scope.makeNote($scope.controlTitleVal, $scope.controlContentVal);
        }
    }
}
