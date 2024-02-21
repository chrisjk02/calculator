function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, op) {
    if (op === '+') { return add(x, y); }
    else if (op === '-') { return subtract(x, y) }
    else if (op === '*') { return multiply(x, y) }
    else if (op === 'divide') { return divide(x, y) };
}


const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
let operation = [];

let displayVals = '';
buttons.forEach(button => {
    button.addEventListener('click', e => {
        displayVals += button.value;
        display.innerText = displayVals;
        console.log(displayVals);
        operation.push(displayVals);
        console.log(`operation: ${displayVals}`);
    })
})

const clear = document.querySelector('button[value = "clear"]');
clear.addEventListener('click', e => {
    displayVals = '';
    display.innerText = displayVals;
})


let firstNum;
let operator;
let secondNum;
