function itCanShowText() {
  var note = new Note("Javascript testing is fun.");
  assertion.isTrue(note.showText() === "Javascript testing is fun.");
};

itCanShowText();
