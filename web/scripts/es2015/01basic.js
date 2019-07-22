// https://babeljs.io/docs/en/learn/

// run node 01basic.js

// Expression bodies

let evens=[1,2,3,4,5,6]

let a="this is a";

var odds = evens.map(function(v){
    console.log(v);
    v=v + 1
});

console.log("--------------------------------");

var odds = evens.map(v => {
    console.log(v);
    v + 1
});

var nums = evens.map((v, i) =>{
    v + i
    console.log(v+"i="+i);
});

let fives=[]

nums.forEach(v => {
    if (v % 5 === 0)
      fives.push(v);
  });

console.log(fives);

  // Lexical this
var bob = {
    _name: "Bob",
    _friends: [{_name:"1"},{_name:"212"}],
    printFriends() {
      this._friends.forEach(f =>
        console.log(this._name + " knows " + f));
    }
  };

  // Lexical arguments
function square() {
    let example = () => {
      let numbers = [];
      for (let number of arguments) {
        numbers.push(number * number);
      }

      return numbers;
    };

    return example();
  }

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]

// class SkinnedMesh extends THREE.Mesh {
//     constructor(geometry, materials) {
//       super(geometry, materials);

//       this.idMatrix = SkinnedMesh.defaultMatrix();
//       this.bones = [];
//       this.boneMatrices = [];
//       //...
//     }
//     update(camera) {
//       //...
//       super.update();
//     }
//     static defaultMatrix() {
//       return new THREE.Matrix4();
//     }
//   }
  function f(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
  }
  f(3) == 15

  console.log(f(12));
  function f(x, ...y) {
    // y is an Array
    return x * y.length;
  }
  f(3, "hello", true) == 6

  function f(x, y, z) {
    return x + y + z;
  }
  // Pass each elem of array as argument
  f(...[1,2,3]) == 6

  console.log("fibonacci");

  var fibonacci = {
    [Symbol.iterator]: function*() {
      var pre = 0, cur = 1;
      for (;;) {
        var temp = pre;
        pre = cur;
        cur += temp;
        yield cur;
      }
    }
  }

  for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
      break;
    console.log(n);
  }

const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  var seconds=new Date().getSeconds();
  console.log("seconds" + seconds+"s="+s);
  console.log("Ran after " + ( seconds- s) + " seconds");
}, 1000);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}