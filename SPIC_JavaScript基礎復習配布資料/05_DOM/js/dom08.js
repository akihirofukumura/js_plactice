const text = document.getElementById("text");
const bigBtn = document.getElementById("btnL");
const smallBtn = document.getElementById("btnS");

bigBtn.addEventListener("click", () => {
  text.style.fontSize = "80px";
});

smallBtn.addEventListener("click", () => {
  text.style.fontSize = "20px";
});
