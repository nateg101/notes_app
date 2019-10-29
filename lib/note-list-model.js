(function(exports){
  class noteListModel {
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
  exports.noteListModel = noteListModel
})(this);
