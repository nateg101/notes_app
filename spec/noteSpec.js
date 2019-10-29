(function(exports) {
  function testNote() {
    var note = new Note('Javascript is fun.')
    assert.isTrue(note.text === 'Javascript is fun.')
  }

  exports.testNote = testNote
})(this)

testNote();
