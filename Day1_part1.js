const fs = require("fs");

fs.readFile("day1input.txt", "utf8", (err, data) => {
  const lines = data.split("\n");
  const left = [];
  const right = [];
  for (const element of lines) {
    const numbers = element.split(/\s+/);
    left.push(numbers[0]);
    right.push(numbers[1]);
  }

  left.sort(function (a, b) {
    return a - b;
  });
  right.sort(function (a, b) {
    return a - b;
  });
  let diff = 0;
  for (let i = 0; i < left.length; i++) {
    diff += Math.abs(left[i] - right[i]);
  }
  console.log(diff);
});
