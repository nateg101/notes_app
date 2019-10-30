(function(exports) {
  function testNoteList() {
    let list = new NoteListModel();
    list.addNote("A new note.");
    assert.isTrue(list.allNotes().length === 1);
    assert.isTrue(list.allNotes()[0].getText() === "A new note.")
    console.log("testNoteList passed.")
  }

  exports.testNoteList = testNoteList
  testNoteList();
})(this);
