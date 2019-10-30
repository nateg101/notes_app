(function(exports){
  class NoteController {
    constructor (noteList = new NoteListModel()){
      this.noteList = noteList
      this.noteListView = new NoteListView(noteList)
    };

    renderHTML(doc = document) {
      return doc.getElementById("app").innerHTML = this.noteListView.displayHTML();
    };
  }
  exports.NoteController = NoteController
})(this);
