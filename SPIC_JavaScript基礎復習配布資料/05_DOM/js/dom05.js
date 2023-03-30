const menu = document.getElementById("size");
const output = document.getElementById("text");

menu.addEventListener("change", () => {
  output.innerText = menu.value + "サイズ";
});
