var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myHeading.textContent = 'Hello Baidu!' + multiply(4, 2);

// alert(testTypeOf())
// alert(testString())

myHeading.onclick = function () {
    myHeading.textContent = 'Hello world!';
    appendChristmas();
    testArray();
    createPanel();
}

/**
 * change color
 * @type {HTMLElement}
 */
let letGuessGame = document.getElementById('GuessGame');
let changeColorLet = document.getElementById('changeColor');
changeColorLet.addEventListener('click', changeColor)

letGuessGame.onclick = function () {
    window.location.href = 'web/html/GuessGame.html';
}

/**
 * create div
 *         --p
 *         --button dynamic
 */
function createPanel() {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = 'This is a message box';
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function () {
        panel.parentNode.removeChild(panel);
    }

}

function testArray() {
    let random = ['tree', 795, [0, 1, 2]];
    random.push("tree", 'test');
    for (let i = 0; i < random.length; i++) {
        let temp = random[i];
        // alert(temp);
    }
    var myArray = ['I', 'love', 'chocolate', 'frogs'];
    var madeAString = myArray.join(' ');
    console.log(madeAString);
    alert(madeAString);
}

function appendChristmas() {
    let list = document.querySelector('h1');
    let listUL = document.createElement('ul');
    listUL.innerHTML = '';
    let greetting = new Array('Happy Birthday!',
        'Merry Christmas my love',
        '',
        'A happy Christmas to all the family'
        , 'Get well soon');
    for (let i = 0; i < greetting.length; i++) {
        let input = greetting[i];
        if (greetting[i]) {
            let listItem = document.createElement('li');
            listItem.textContent = input;
            list.appendChild(listItem);
        }
    }
}

function changeColor() {

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    // btn.onclick = function () {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
    // }
}

var index = 0;

function testString() {
    var browser = "Chrome";
    return "length=" + browser.length +
        "\n0=" + browser[0] + "big" + browser.big() + "index=" + browser.indexOf('hrome') + 'noindex=' + browser.indexOf('mychome') +
        '\nslice=' + browser.slice(2) + '\nsubstring=' + browser.substring(0, 3)
        + "\ntoLowerCase=" + browser.toLowerCase() + "toUpperCase=" + browser.toUpperCase()
        + '\nreplace=' + browser.replace('ro', "ty");
}

function testVar() {
    index = 6;
    return index;
}

let tempInt = 3;

function testTypeOf() {
    let myDate = '19' + '67';
    typeof myDate;
    let myString = '123';
    let myNum = Number(myString);
    typeof myNum;

    return myDate === 'string' + 'xxxx' + myNum === 'number';

}

function testLet() {
    let tempInt = 6;
    return tempInt;
}

function getNewArray() {

    var string = "x";
    var arr = new Array(5);
    if (index % 2 == 0) {
        for (var i = 0; i < arr.length; i++) {
            string = string + i;
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            string = string + i;
        }
    }
    index++;
    return string;
}

function numberVsString() {
    return "北京" + 2
}

/**
 * this is tells the difference of var and let
 */
if (1 == 1) {
    var tempxxx = 1;
    let tempLetxxx = 2;
}


// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awwww, but chocolate is my favorite...');
// }

function TestJson() {
    window.location.href = 'web/html/TestJson.html';
}

function createParagraph() {
    let para = document.createElement('p');
    // para.textContent = 'You clicked the button!' + testLet() + "tempInt=" + tempInt;
    // para.textContent = 'You clicked the button!' + testVar() + "testVar=" + index;
    para.textContent = 'You clicked the button!' + getNewArray() + "getNewArray=" + tempxxx + "tempLetxxx=" + tempLetxxx;
    document.body.appendChild(para);
}

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

