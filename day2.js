const fs = require("fs");
const checkSafe = (arr) => {
  const differ = [];
  for (let i = 1; i < arr.length; i++) {
    differ.push(arr[i] - arr[i - 1]);
  }

  if (differ.every((x) => 1 <= x && x <= 3)) {
    return 1;
  }
  if (differ.every((x) => -3 <= x && x <= -1)) {
    return 1;
  }

  return 0;
};

const checkSafePartTwo = (arr) => {
  const differ = [];
  for (let i = 1; i < arr.length; i++) {
    differ.push(arr[i] - arr[i - 1]);
  }
  console.log(
    differ.filter((x) => !((1 <= x && x <= 3) || (-3 <= x && x <= -1))).length
  );
  if (
    differ.filter((x) => !((1 <= x && x <= 3) || (-3 <= x && x <= -1)))
      .length >= 1
  ) {
    return 1;
  }

  return 0;
};

fs.readFile("day2input.txt", "utf8", (err, data) => {
  const lines = data.split("\n").map((line) => line.split(/\s+/).map(Number));

  let countSafe = 0;
  let countSafePart2 = 0;
  for (const el of lines) {
    countSafe += checkSafe(el);
    countSafePart2 += checkSafePartTwo(el);
  }
  console.log(countSafePart2);
});
