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
    num1 = parseInt(x);
    num2 = parseInt(y);
    if (op === '+') { return add(num1, num2); }
    else if (op === '-') { return subtract(num1, num2) }
    else if (op === '*') { return multiply(num1, num2) }
    else if (op === '/') { return divide(num1, num2) };
}


const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')


let firstNum = '';
let operator = '';
let secondNum = '';

let displayVals = '';
buttons.forEach(button => {
    button.addEventListener('click', e => {
        display.innerText = (displayVals += button.value);
        firstNum = displayVals;
    })
})

const clear = document.querySelector('button[value = "clear"]');
clear.addEventListener('click', e => {
    display.innerText = (displayVals = '');
    firstNum = '';
    secondNum = '';
    operator = '';
    operation = [];
})

let operation = [];

const operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', e => {
        operator = op.value;
        operation.push(firstNum);
        operation.push(operator);
        firstNum = '';
        display.innerText = (displayVals = '');
    })
})


const equals = document.querySelector('.equals');
equals.addEventListener('click', e => {
    operation.push(firstNum);
    console.log(operation);

    displayVals = (operate(operation[0], operation[2], operation[1]));
    display.innerText = displayVals;
})



