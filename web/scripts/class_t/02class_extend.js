// 原型链基础  
class Person{
  constructor(name){
    this.name=name;
  }
  sayHello(){
    console.log("sayHello->"+this.name);
  }
}

Person.prototype.name="zhangsan";
Person.prototype.sayHello=function(){
  console.log("prototype sayHello->"+this.name);
}


function Student(){

}

Student.prototype=Object.create(Person.prototype);

var s=new Student();

s.sayHello();