// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random() * 5);

let omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
console.log(omikuji);

if (no == 0) {
  console.log(omikuji[0] + "ですおめでとう！");
} else if (no == 1) {
  console.log(omikuji[1] + "ですラッキー！");
} else if (no == 2) {
  console.log(omikuji[2] + "です少しラッキー！");
} else if (no == 3) {
  console.log(omikuji[3] + "です");
} else if (no == 4) {
  console.log(omikuji[4] + "ですアンラッキー");
} else if (no == 5) {
  console.log(omikuji[5] + "です残念・・・");
}
