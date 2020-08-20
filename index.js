let input = document.querySelector('.input-area input');
let submit = document.querySelector('.input-area_submit');

let output = document.querySelector('.output p');

var initialValue = "1d6+1";
input.value = initialValue;

submit.addEventListener('click', setup);
document.querySelector('body').addEventListener('keydown', event => {
    
    event.keyCode == 13 ? setup() : "";
})

function setup() {

    let string = input.value;

    dices = string.split(/[+-]/);
    let values = dices.map(dice => {
        
        if (/[0-9]*d[0-9]*/.test(dice)) {
            return roll(dice);
        }
        return +dice;
    });
    
    operators = string.match(/[+-]/g);

    console.log(values, operators)
    
    let expression = arrayIntercale(values, operators).join("");
    console.log(expression)

    output.textContent = eval(expression);
    input.value = string || "";
}

function arrayIntercale(arr1, arr2, arr3=[]) {
    
    if (arr1.length == 0) return arr3;

    arr3.push(arr1.shift());

    if (arr2.length != 0) arr3.push(arr2.shift());

    return arrayIntercale(arr1, arr2, arr3)
}

function roll(dice) {

    return Math.ceil(Math.random() * dice.split('d')[1]) * dice.split('d')[0];
}

