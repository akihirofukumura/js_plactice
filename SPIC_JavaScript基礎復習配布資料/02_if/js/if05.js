photoshop = parseInt(prompt());
illustrator = parseInt(prompt());
let average = (photoshop + illustrator) / 2;

console.log(
  `photoshopは${photoshop}点ね、`,
  `Illustratorは${illustrator}点ね、`,
  `平均${average}点`
);
if (average >= 61 && average <= 100) {
  console.log("頑張ったね");
} else if (average <= 60 && average >= 31) {
  console.log("まずまずね");
} else if (average >= 0 && average <= 30) {
  console.log("頑張りなさい");
} else if (average < 0 || average > 100) {
  console.log("嘘つくんじゃない");
}
