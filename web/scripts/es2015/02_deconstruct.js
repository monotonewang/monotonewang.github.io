// run node 01basic.js

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
let [d = 3, f] = [3];
console.log(d, f);

let { g, h } = { g: "111", h: "222" };
console.log(g, h);


// 解构赋值
let [a1,b1,c1] = [1,2,3];
let [a2=3,b2] = [1];

console.log("a1=");
console.log("a1=",a1,b1,c1);
console.log("a2=",a2,b2);

let {ao1,ao2}={ao1:111,ao2:"232"}
console.log("ao1=",ao1,ao2);


let {ao3:ao4}={ao3:1113}
console.log("ao4=",ao4);
//模板字符串
console.log(`g=${g}`);

//ES5 
var foo = function () {
  return 1;
}

console.log(foo());

//ES6
let foo6 = (h) => h + "es2015=>ES6";
console.log(foo6());

console.log(this)
let obj = {
  "name": "john",
  "age": 20, 
  "sayHello": () => {
    console.log("say hello",this.foo)
    console.log(this)
  }
};
let { name, age } = obj;
console.log(`${name}-${age}`);
obj.sayHello();
let fooFun=(a)=>{
  return a+10;
}
console.log(fooFun(20));

// set结构

let set= new Set([1,2,3,4,4]);

console.log(set);
var x=[...set];
console.log(typeof(x));//扩张运算符，将类数组以对象形式
console.log(...set);//扩张运算符，将类数组以对象形式
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
for(let key of set.keys()){
  console.log(key+"xx=");
} 
for(let value of set.values()){
  console.log(value+"xx=");
}  
for(let [key,item] of set.entries()){
  console.log(key+"xx="+item);
}  

set.forEach((value,key)=>console.log(value*2));

var map=new Map([["name","john"],["age",20]])
map.set("sex","man");
console.log(map);
console.log(map.size);
//生成器函数
function* fooG(x){
  yield x+1;
  yield x+2;
  return x+3;
}

var fx=fooG(1);
console.log(fx);
console.log(fx.next(),fx.next(),fx.next());