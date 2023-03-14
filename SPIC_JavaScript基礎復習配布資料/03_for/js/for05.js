let num = Number(prompt());

if (num < 1 || num > 50) {
  console.log("1から50入れ");
} else {
  for (let i = 1; i <= num; i++) {
    console.log(i + "回目");
  }
}
