
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}


function greeter(person:Person) {
  let name: string = "bob";
  let sentence: string = `Hello, my name is ${ name }.`;

  let list: number[] = [1, 2, 3];
  let listNumber: Array<number> = [1, 2, 3];

  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  // Initialize it incorrectly
  // x = [10, 'hello']; // Error

  console.log(x[0].substr(1)); // OK
  // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

  // x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

  // console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

  // x[6] = true; // Error, 布尔不是(string | number)类型
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;

  enum Colors {Red = 1, Green, Blue}
  let colorName: string = Colors[2];

  console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
  // enum Color {Red = 1, Green, Blue}
  // let c: Color = Color.Green;
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false; // okay, definitely a boolean
  notSure.ifItExists(); // okay, ifItExists might exist at runtime
  notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
  
  let unusable: void = undefined;
  // Not much else we can assign to these variables!
  let u: undefined = undefined;
  let n: null = null;

  // as语法
  let someValue: any = "this is a string";
  //类型断言
  let strLength1: number = (<string>someValue).length;

  let strLength: number = (someValue as string).length;
  //结构数组
  let input = [1, 2];
  let [first, second] = input;
  console.log(first); // outputs 1
  console.log(second); // outputs 2

  let [first1, ...rest] = [1, 2, 3, 4];
  console.log(first1); // outputs 1
  console.log(rest); // outputs [ 2, 3, 4 ]

  //interface
  interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

  //可选属性
  interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});

  //只读属性
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  let p1: Point = { x: 10, y: 20 };

  //函数类型
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  }

  // 可索引的类型
  interface StringArray {
    [index: number]: string;
  }
  
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  
  let myStr: string = myArray[0];

  return "Hello, " + person.firstName + " " + person.lastName;
}

let isDone :boolean =true;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;


// let user = "Jane User";
// let user = {firstName:"Jane",lastName:"User"};
let user = new Student("Jane", "M.", "User");


console.log(greeter(user));
document.body.innerHTML = greeter(user);