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

let url ="/img/20200815/976864f749b5a47f74d06fdf053d43d1.jpg"

if (!url || !url.trim()){
  console.log("xxxxxx")
}else{
  console.log(url)
}
let x=100;
x=x--;

console.log(x);
// let y=+x;
// console.log(y);
// console.log(typeof(y));

let data='/pages/index/ecology/mall/company-home/index?customer_id=174&organization_id=91&ecology_id=';

let query = {}
let index=data.indexOf('?');
console.log(index,"index")
let s=data.substr(index+1);
console.log(s,"s")
s.split('&').forEach(stringQuery => {
  const [key, val] = stringQuery.split('=')
  query[key] = val
})
console.log(query,"query");
      
let strxx="PPT的使用需要很多摸索的过程。通过素材应用、图片处理、文字处理、模板应用、智能图文各种搭配，会使得ppt做的非常有吸引力。总结是对世界的一个认识，通过这个环节有效提示工作效率和少走工作弯路。各种技巧使用提示ppt的质量，图文并茂。更好帮助大家理解。马老师讲课的生动易懂。从多个维度学习。不同地方去做好汇报和年终总结的报告。有突出，有重点，抓住重点，寻找工作和事物的发展规律，掌握好规律，完美呈现ppt。";
console.log(strxx.length,"index getHomeData" );
console.log(query.customer_id,"index getHomeData" );

let datax={};
let permission_list=[1,2];
permission_list.map(item=>{
  return item
})
Object.assign(
  datax,
  { permission_ids: permission_list },
);
console.log("data",datax );