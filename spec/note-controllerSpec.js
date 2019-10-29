(function(exports){
  function innerHTMLtest() {

    var elementDouble = {
      innerHTML: 'double'
    }

    var documentDouble = {
      getElementById: function() {
        return elementDouble
      }
    }
    note_list = new noteListModel()
    note_list.addNote('double')
    controller = new NoteController(note_list)
    console.log(documentDouble.getElementById)
    console.log(note_list)
    assert.isTrue(controller.renderHTML(documentDouble)==='<ul><li><div>double</div></li></ul>')
  }
  exports.innerHTMLtest = innerHTMLtest
  innerHTMLtest();
})(this);
