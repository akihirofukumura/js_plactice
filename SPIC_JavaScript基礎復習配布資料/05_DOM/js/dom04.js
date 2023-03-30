const text = document.getElementById("school");
const btn = document.getElementById("btn");
const output = document.getElementById("text");

btn.addEventListener("click", () => {
  output.innerText = text.value;
  console.log("zz");
});
