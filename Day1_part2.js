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

  let similarity = 0;

  for (const element of left) {
    similarity += element * right.filter((x) => x === element).length;
  }
  console.log(similarity);
});
