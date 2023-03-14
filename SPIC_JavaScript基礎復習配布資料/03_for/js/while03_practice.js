//残金
let wallet = 12800;
//価格
let price = 980;
// count（変数）は購入した数
let count = 0;

do {
  if (count == 4) {
    price = 750;
    // console.log("値引き");
  }
  if (wallet <= price) {
    console.log(count);
    break;
  }
  count++;
  console.log(`${count}回目の買い物成功、残金が${wallet}円`);
} while ((wallet = wallet - price));

console.log(`買い物終了${count}個買えた`);

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     price = 750;
//     console.log("値引き");
//   }
//   if (wallet >= price) {
//     console.log(i + "回目の買い物成功。" + "残金は" + wallet);
//     wallet = wallet - price;
//     count++;
//     console.log(count);
//   } else {
//     console.log("買い物終了" + count + "個買えた");
//     break;
//   }
//   // console.log(i + "回目", wallet);
// }
