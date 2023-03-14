//残金
let wallet = 12800;
//価格
let price = 980;
// count（変数）は購入した数
let count = 0;
// for (let i = 1; i < 20; i++) {
//   if (i < 5) {
//     wallet = wallet - price;
//   } else if (i == 5) {
//     // console.log("値引き");
//     wallet = wallet - price02;
//   } else if (wallet > price02) {
//     wallet = wallet - price02;
//   } else if ((wallet = price02)) {
//     wallet = wallet - price02;
//     console.log("買えません");
//   }
//   console.log(wallet);
// }

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    price = 750;
    console.log("値引き");
  }
  if (wallet >= price) {
    console.log(i + "回目の買い物成功。" + "残金は" + wallet);
    wallet = wallet - price;
    count++;
    console.log(count);
  } else {
    console.log("買い物終了" + count + "個買えた");
    break;
  }
  // console.log(i + "回目", wallet);
}

// breakはswichと同じで強制終了させれる
// count（変数）は購入した数で必ず通るところがif文の買い物成功のときだから
// 買った。というので１カウント増えるからから0の箱に++(+1)で１ずつ通れば
// カウントがされていく。
