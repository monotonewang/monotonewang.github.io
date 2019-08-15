// run node 01basic.js

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
let [d = 3, f] = [3];
console.log(d, f);

let { g, h } = { g: "111", h: "222" };
console.log(g, h);

console.log(`${g}`);

//ES5 
var foo = function () {
  return 1;
}

console.log(foo());

//ES6
let foo6 = (h) => h + "es2015=>ES6";
console.log(foo6());

let obj = {
  "name": "john", "age": 20, 
  "sayHello": () => {
    console.log("say hello")
  }
};
let { name, age } = obj;
console.log(`${name}-${age}`);
obj.sayHello();

// set结构

let set= new Set([1,2,3,4,4]);

console.log(set);
console.log(...set);
console.log(set.size);
//是否有某个元素
console.log(set.has(3));
//删除某个元素
console.log(set.delete(1));
console.log(set);
console.log(set.clear());//清除
console.log(set);
console.log(set.add(5));
console.log(set);
console.log(set.keys());
for(let [key,item] of set.entries()){
  console.log(key+"xx="+item);
}  

set.forEach((value,key)=>console.log(value*2));

var map=new Map([["name","john"],["age",20]])
map.set("sex","man");
console.log(map);
//生成器函数
function* fooG(x){
  yield x+1;
  yield x+2;
  return x+3;
}

var fx=fooG(1);
console.log(fx);
console.log(fx.next(),fx.next(),fx.next());