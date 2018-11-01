var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myHeading.textContent = 'Hello Baidu!' + multiply(4, 2);


myHeading.onclick = function () {
    myHeading.textContent = 'Hello world!';
}
// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awwww, but chocolate is my favorite...');
// }


var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.')
    localStorage.setItem('name', myName);
    myButton.textContent = "Mozilla is cool, " + myName;
}

myButton.onclick = function () {

    if (!localStorage.getItem('name')) {
        setUserName()
    } else {
        var storedName = localStorage.getItem('name');
        myButton.textContent = "Mozilla is cool, " + storedName;
    }
}

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

