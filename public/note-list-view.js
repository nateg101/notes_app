(function(exports){
  class noteListView {
    constructor(noteList) {
      this.noteList = noteList
    }
    displayHTML() {
      var output = "<ul>";
      this.noteList.allNotes().forEach( function(note){

        output += "<li><div>" + note.getText() + "</div></li>"
      })
      return output + "</ul>"
    }
  }
  exports.noteListView = noteListView
})(this);
