(function(exports){
  function singleNoteHTMLtest() {

    var note = new Note('test this')
    var single_note_view = new SingleNoteView(note)
    assert.isTrue(single_note_view.displayHTML()=== '<div>test this</div>')
    console.log('singleNoteHTMLtest passed.')
  }
  exports.singleNoteHTMLtest = singleNoteHTMLtest
})(this);

singleNoteHTMLtest();
