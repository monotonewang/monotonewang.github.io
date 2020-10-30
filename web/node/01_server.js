// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

let a = [1, 2, 3];

a = a.map(item => {
  item = item + 1;
  return item;
})

console.log(a);
let num = 0;
if (!(/(^[1-9]\d*$)/.test(num))) {
  console.log("输入的不是正整数");
} else {
  console.log("输入的是正整数");
} 
