(function(exports){
  class NoteListModel {
    constructor() {
      this.notes = [];
    }

    addNote(text) {
      let note = new Note(text);
      this.notes.push(note);
    }

    allNotes() {
      return this.notes;
    }
  }
  exports.NoteListModel = NoteListModel
})(this);
