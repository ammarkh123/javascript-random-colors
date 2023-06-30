let btn_change = document.querySelector(".btn-change");
let colorHexa = document.getElementById("colorHexa");

function randomBg() {
  var text = "#" + Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = text;
  colorHexa.innerHTML = text;
}
btn_change.addEventListener("click", randomBg);
