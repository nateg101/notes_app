(function(exports){
  class NoteController {
    constructor (noteList = new noteListModel()){
      this.noteList = noteList
      this.noteList.addNote('Coding can be fun')
      this.noteList.addNote('It can also be hard too')
      this.noteListView = new noteListView(noteList)
      this.html = this.noteListView.displayHTML();
    }

    renderHTML(doc = document) {
      doc.getElementById("app").innerHTML = this.html;
    }
  }
  exports.NoteController = NoteController
})(this);

controller = new NoteController()
controller.renderHTML()
