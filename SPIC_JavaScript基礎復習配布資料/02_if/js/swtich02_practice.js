const num1 = 18;
const num2 = 9;
const calc = prompt();
let ans = 0;

// if (calc == "a") {
//   ans = num1 + num2;
// } else if (calc == "b") {
//   ans = num1 - num2;
// } else if (calc == "c") {
//   ans = num1 * num2;
// } else if (calc == "d") {
//   ans = num1 / num2;
// } else {
//   ans = "error!";
// }

// console.log(ans);

switch (calc) {
  case "a":
    ans = num1 + num2;
    console.log(ans);
    break;
  case "b":
    ans = num1 - num2;
    console.log(ans);
    break;
  case "c":
    ans = num1 - num2;
    console.log(ans);
    break;
  case "d":
    ans = num1 - num2;
    console.log(ans);
    break;
  default:
    console.log("error!");
    break;
}
