const main = document.getElementById("main");
const sub = document.getElementById("sub");
const soup = document.getElementById("soup");
const side = document.getElementById("side");
const btn = document.getElementById("submit");
const output = document.getElementById("menu");

btn.addEventListener("click", () => {
  output.innerText = `注文料理は${main.value},${sub.value},${soup.value},${side.value}です。`;
});
