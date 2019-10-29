
  class SingleNoteView {
    constructor(note = Note) {
      this.note = note
    }

    displayHTML() {
      return "<div>" + this.note.getText() + "</div>"
    }
  }
