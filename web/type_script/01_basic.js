var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    var name = "bob";
    var sentence = "Hello, my name is " + name + ".";
    var list = [1, 2, 3];
    var listNumber = [1, 2, 3];
    // Declare a tuple type
    var x;
    // Initialize it
    x = ['hello', 10]; // OK
    // Initialize it incorrectly
    // x = [10, 'hello']; // Error
    console.log(x[0].substr(1)); // OK
    // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
    // x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
    // console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
    // x[6] = true; // Error, 布尔不是(string | number)类型
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 1] = "Red";
        Colors[Colors["Green"] = 2] = "Green";
        Colors[Colors["Blue"] = 3] = "Blue";
    })(Colors || (Colors = {}));
    var colorName = Colors[2];
    console.log(colorName); // 显示'Green'因为上面代码里它的值是2
    // enum Color {Red = 1, Green, Blue}
    // let c: Color = Color.Green;
    return "Hello, " + person.firstName + " " + person.lastName;
}
var isDone = true;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// let user = "Jane User";
// let user = {firstName:"Jane",lastName:"User"};
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
document.body.innerHTML = greeter(user);
