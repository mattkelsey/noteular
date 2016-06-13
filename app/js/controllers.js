'use strict';

/* Controllers */

var noteularApp = angular.module('noteularApp', ['ngAnimate']);

noteularApp.controller('NoteListCtrl', NoteListFunc);

function NoteListFunc($scope) {
    $scope.controlTitleVal;
    $scope.controlContentVal;
    $scope.id;
    $scope.showSettings;
    $scope.notes = [{"title": "Welcome to Noteular", "content": "Create a note below!", "id": "0"}];

    $scope.makeNote = function (title, content) {
        $scope.notes.push({'title': title, 'content': content});
        $scope.controlTitleVal = "";
    }

    $scope.handleNoteKey = function(event) {
        if(event.keyCode == 13) {
            $scope.makeNote($scope.controlTitleVal, $scope.controlContentVal);
        }
    }

    angular.element(document).on("click", function(e) {
        var target = angular.element(e.target);
        var noteBody = target.parent().parent().parent();
        if (target.hasClass("color-blue")) {
            noteBody.addClass("bg-color-blue");
            noteBody.removeClass("bg-color-yellow");
            noteBody.removeClass("bg-color-orange");
            noteBody.removeClass("bg-color-red");
        } else if (target.hasClass("color-yellow")) {
            noteBody.addClass("bg-color-yellow");
            noteBody.removeClass("bg-color-blue");
            noteBody.removeClass("bg-color-orange");
            noteBody.removeClass("bg-color-red");
        } else if (target.hasClass("color-orange")) {
            noteBody.addClass("bg-color-orange");
            noteBody.removeClass("bg-color-blue");
            noteBody.removeClass("bg-color-yellow");
            noteBody.removeClass("bg-color-red");
        } else if (target.hasClass("color-red")) {
            noteBody.addClass("bg-color-red"); 
            noteBody.removeClass("bg-color-blue");
            noteBody.removeClass("bg-color-yellow");
            noteBody.removeClass("bg-color-orange");
        }
    })
}
