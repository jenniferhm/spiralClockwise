const spiralClockwise = require("./spiralClockwise");

describe("#spiralClockwise", function () {

  it("is a function", function () {
    expect(typeof spiralClockwise).toEqual("function");
  });

  it("should traverse matrix in a spiral pattern clockwise", function () {
    expect(spiralClockwise([
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"]
    ])).toEqual("abcdhlkjiefg");

    expect(spiralClockwise([
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"]
    ])).toEqual("abcfihgde");
  });

});