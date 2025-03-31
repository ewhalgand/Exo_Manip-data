const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "data.json");
const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
const data = JSON.parse(content);
// write your code bellow

// 1 :
console.log(typeof data);

// 2 :
console.log(data[0]);

// 3 :
console.log("Nombre :", data.length);

// 4 :
for (const newData of data) {
  if (newData.ranking === 4) {
    console.log(newData);
  }
}

// 5 :
const totalAge = data.reduce((acc, curr) => acc + curr.age, 0);
const averageAge = totalAge / data.length;

console.log(averageAge);
