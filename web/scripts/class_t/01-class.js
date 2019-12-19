// 类的使用
class Person{
  constructor(name){
    this.name=name;
  }
  sayHello(){
    console.log("sayHello->"+this.name);
  }
}

Person.prototype.weight=11.1;
//sayHello会被覆盖
Person.prototype.sayHello=function(){
  console.log("prototype sayHello->"+this.name);
}


var person=new Person("lisi ");
person.sayHello();
console.log(person.weight)

// Student是Person的子类
function Student(name,age,id){
  // Person.apply(this,[name]);
  // Person.call(this,name,age);
  this.id=id;
  this.study =function(){
    console.log("study->"+this.name);
  }
}

var student=new Student("lisi ",11,1);
student.study();

//第二种方法
function Animal(name,age){
  this.name=name;
  this.age=age;
  this.sayHello=function(){
    console.log("Animal sayHello");
  }
}

new Animal().sayHello();