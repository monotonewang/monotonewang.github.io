// 类的使用
class Person{
  constructor(name){
    this.name=name;
  }
  sayHello(){
    console.log("sayHello->"+this.name);
  }
}

var person=new Person("lisi ");
person.sayHello();

//第二种方法
function Animal(name,age){
  this.name=name;
  this.age=age;
  this.sayHello=function(){
    console.log("Animal sayHello");
  }
}

new Animal().sayHello();