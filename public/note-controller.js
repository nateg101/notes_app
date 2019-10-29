(function(exports){
  class NoteController {
    constructor (noteList = new noteListModel()){
      this.noteList = noteList
      // noteList.addNote('Coding can be fun')
      // noteList.addNote('It can also be hard too')
      this.noteListView = new noteListView(noteList)
      this.html = this.noteListView.displayHTML();
    };

    renderHTML(doc = document) {
      return doc.getElementById("app").innerHTML = this.html;
    };
  }
  exports.NoteController = NoteController
})(this);

// controller = new NoteController  // cannot set property 'innerHTML' of null
// controller.renderHTML(document)
