const fs = require("fs");

const data = fs.readFileSync("2.ts");

console.log(data.toString());

console.log("同步读取完成");

fs.readFile("2.ts", (err: any, data: any) => {
  console.log(data.toString());
  console.log("异步读取完成");
});

console.log("异步读取");
