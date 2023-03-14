const wallet = 3000;
let item = prompt();

if (wallet > item) {
  console.log("購入可能");
} else if (item == 3000) {
  console.log("ピッタリです");
} else {
  console.log("購入できません");
}
