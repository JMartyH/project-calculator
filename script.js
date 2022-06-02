let calculatorObj = {

    operandOne: 0,
    operandTwo: 0,
    operation: '',
    set setOperandOne(operandOne) {
        this.operandOne = operandOne;
    },
    set setOperandTwo(operandTwo) {
        this.operandTwo = operandTwo;
    },
    set setOperation(operation) {
        this.operation = operation;
    },
    get getOperandOne() {
        return this.operandOne;
    },
    get getOperandTwo() {
        return this.operandTwo;
    },
    get getOperation() {
        return this.operation;
    }
}

const screenDiv = document.querySelector('#screen');
const clearBtn = document.querySelector('#clear');
const backSpaceBtn = document.querySelector('#backspace');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const divideBtn = document.querySelector('#divide');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const multiplyBtn = document.querySelector('#multiply');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('three');
const subtractBtn = document.querySelector('#subtract');
const decimalBtn = document.querySelector('#decimal-point');
const zeroBtn = document.querySelector('#zero');
const addBtn = document.querySelector('#add');
const equalBtn = document.querySelector('#equal');


function add(previous, current) {
    return previous + current;
}

function subtract(previous, current) {
    return previous - current;
}

function multiply(previous, current) {
    return previous * current;
}

function divide(previous, current) {
    return previous / current;
}

function operate(operandOne, operandTwo, operation) {
    if (operation === '+') {
        return add(operandOne, operandTwo);
    } else if (operation === '-') {
        return subtract(operandOne, operandTwo);
    } else if (operation === '*') {
        return multiply(operandOne, operandTwo);
    } else if (operation === '/') {
        return divide(operandOne, operandTwo);
    }
}

let currentAnswer = 0;
let previousAnswer = 0;

function getPreviousAnswer(currentAnswer) {
    return currentAnswer;
}

function pressedNumber(e) {

    const number = document.querySelector(`button[data-number="${e.key}"]`);
    if (!number) {
        return;
    }
    return e.key;
}

function pressedOperator(e){
    const operator = document.querySelector(`button[data-operator="${e.key}"]`);
    if (!operator) {
        return;
    }
    return e.key;
}

function pressedEvaluate(e){
    const evaluate = document.querySelector(`button[data-evaluate="${e.key}"]`);
    if (!evaluate) {
        return;
    }
    return e.key;

}

function pressedDecimal(e){
    const decimal = document.querySelector(`button[data-decimal="${e.key}"]`);
    if (!decimal) {
        return;
    }
    return e.key;
}

window.addEventListener('keydown', pressedNumber);
window.addEventListener('keydown', pressedOperator);
window.addEventListener('keydown', pressedEvaluate);
window.addEventListener('keydown', pressedDecimal);