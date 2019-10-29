var assert = {
  isTrue: function(toCheck) {
    if(!toCheck) {
      throw new Error("Assertion failed: " + toCheck + " is not truthy.");
    } else {
      console.log("Passed: " + toCheck + " is truthy.")
    }
  }
};
