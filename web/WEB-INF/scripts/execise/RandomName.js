let aobama = 'The latest Tweets from Barack Obama (@BarackObama). Dad, husband, President, citizen. Washington, DC.';
let trump = 'Donald John Trump (born June 14, 1946) is the 45th and current President of the United States. Before entering politics, he was a businessman and television ...';
let clinton = 'Welcome to the Office of. Hillary Rodham Clinton. Read about Hillary\'s life · See Hillary\'s current projects · Learn about Hillary\'s vision for America · Send Hillary ...';


let arrayStories = [aobama, trump, clinton];

let name = document.getElementById('name');
let noteId = document.getElementById('note');
let man = document.getElementById('man');
let woman = document.getElementById('woman');
let weatherSelect = document.getElementById('weather');
let weatherP = document.getElementById('weatherP');

let generate = document.getElementById('generate');

let note = document.getElementsByClassName('editor-note');

generate.onclick = function () {
    if (name.value == '') {
        alert("Please input name first");
        return;
    }
    if (man.checked) {
        let random = Math.random();
        if (random > 0.5) {
            note[0].innerHTML = name.value + "intro=" + aobama;//通过class给p标签赋值
        } else {
            note[0].innerHTML = name.value + "intro=" + trump;//通过class给p标签赋值
        }
    } else if (woman.checked) {
        note[0].textContent = name.value + "intro=" + clinton;//通过class给p标签赋值
    }
    // noteId.innerHTML=name.value;//给p标签赋值

}

function setWeather() {
    let choice = weatherSelect.value;

    if (choice === 'sunny') {
        weatherP.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        weatherP.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        weatherP.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        weatherP.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        weatherP.textContent = '';
    }
}

weatherSelect.addEventListener('change', setWeather)

/**
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
 */
function testLoop() {


    // loop(food = 0; foodNeeded = 10) {
    //     if (food = foodNeeded) {
    //         exit loop;
    //         // We have enough food; let's go home
    //     } else {
    //         food += 2; // Spend an hour collecting 2 more food
    //         // loop will then run again
    //     }
    // }


}