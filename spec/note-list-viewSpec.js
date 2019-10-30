(function(exports) {
  function testListView() {
    let list = new NoteListModel();
    list.addNote("Hello World");
    let view = new NoteListView(list);
    assert.isTrue(view.displayHTML() === "<ul><li><div>Hello World</div></li></ul>")
    console.log("noteListView passed.")
  }
  exports.testListView = testListView
  testListView();
})(this);
