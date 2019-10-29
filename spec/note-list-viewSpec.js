(function(exports) {
  function testListView() {
    let list = new noteListModel();
    list.addNote('Favourite food: pesto');
    list.addNote('Favourite drink: seltzer');
    let note_view = new noteListView(list);
    assert.isTrue(note_view.displayHTML() === '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>')
    console.log("noteListView passed.")
  }
  exports.noteListView = noteListView
  testListView();
})(this);
