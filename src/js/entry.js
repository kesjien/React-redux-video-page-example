require([ "bolding" ], function (bolding) {
  let bold = new bolding("text");
  document.getElementById("fat").onclick = function () {
    bold.fat();
  }
});
