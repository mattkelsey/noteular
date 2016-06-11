angular.
    module('noteular').
    component('note', {
        template:
            '<div class="note">' +
            '<h class="note-title">{{note.title}}</h>' +
            '<p class="note-content">{{note.content}}</p>' +
            '</div>',
        controller: function NoteController() {
            this.controlTitleVal;
            this.controlContentVal;
            this.notes = [{"title": "Welcome to Noteular", "content": "Create a note below!"}];
        }
    });
