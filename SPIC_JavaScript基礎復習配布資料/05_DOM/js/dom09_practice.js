const bBtn = document.getElementById("btn-large");
const sBtn = document.getElementById("btn-small");
const text = document.getElementById("wrap");
let font = 16;

bBtn.addEventListener("click", () => {
  font += 2;
  text.style.fontSize = `${font}px`;
});
