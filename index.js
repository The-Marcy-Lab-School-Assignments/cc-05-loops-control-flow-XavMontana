// 1
multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};
multiplesOfSixAndNine();

//2
greaterNum = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 === num2) {
      return "Both integers are equal";
    } else if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return null;
  }
};

console.log(greaterNum(10, 7));
console.log(greaterNum(1.14, 1.14));
console.log(greaterNum("21", 21));
console.log(greaterNum("21", "21"));
