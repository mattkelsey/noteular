angular.
    module('noteularApp').
    component('note', {
        templateUrl: 'note.component.html',
        controller: NoteController,
        scope: true,
        controllerAs: 'ctrl'
    });


function NoteController () {
    var controlTitleVal;
    var controlContentVal;
    var id;
    var showSettings;
    var hidden;
    var notes = [{"title": "Welcome to Noteular", "content": "Create a note below!", "id": "0"}];

    var makeNote = function (title, content) {
        notes.push({'title': title, 'content': content});
        controlTitleVal = "";
        controlContentVal = "";
    }
    var handleNoteKey = function(event) {
        if(event.keyCode == 13) {
            makeNote(controlTitleVal, controlContentVal);
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

