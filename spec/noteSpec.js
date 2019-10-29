(function(exports) {
  function testNote() {
    let note = new Note('Javascript is fun.')
    assert.isTrue(note.getText() === 'Javascript is fun.')
    console.log("testNote passed.")
  }

  exports.testNote = testNote
  testNote();
})(this);
