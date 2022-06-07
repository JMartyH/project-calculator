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
const buttons = document.querySelectorAll('button'); 

const holdInputs = [];
let screenContent = '';

function joinArray (holdInputs){
    return parseInt(holdInputs.join(''));
}

function clearArray (holdInputs){
    holdInputs.length = 0;
    return;
}

function deleteLastInput(holdInputs){
    holdInputs.pop();
    return holdInputs;
}


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

function savePreviousAnswer(currentAnswer) {
    previousAnswer = currentAnswer;
}

//TODO: change return and get the inputs like pressedNumber();
// pressedDecimal - ok
// pressedEvaluate - X
// pressedNumber - ok
// pressedOperator - X
// clickedDecimal - ok
// clickedEvaluate - X
// clickedNumber - ok
// clickedOperator - X

function pressedNumber(e) {

    const number = document.querySelector(`button[data-number="${e.key}"]`);
    if (!number) {
        return;
    }
    
    holdInputs.push(e.key);
    displayOnScreen(e.key);
    return;
}

function pressedOperator(e) {
    const operator = document.querySelector(`button[data-operator="${e.key}"]`);
    if (!operator) {
        return;
    }
    calculatorObj.setOperandOne = joinArray(holdInputs);
    calculatorObj.setOperation = e.key;
    displayOnScreen(e.key);
    clearArray(holdInputs);
    return;
}

function pressedEvaluate(e) {
    const evaluate = document.querySelector(`button[data-evaluate="${e.key}"]`);
    if (!evaluate) {
        return;
    }
    calculatorObj.setOperandTwo = joinArray(holdInputs);
    console.log(operate(calculatorObj.getOperandOne, calculatorObj.getOperandTwo, calculatorObj.getOperation));
    currentAnswer = operate(calculatorObj.getOperandOne, calculatorObj.getOperandTwo, calculatorObj.getOperation);
    savePreviousAnswer(currentAnswer);
    displayOnScreen(`${e.key}${currentAnswer}` );
    clearArray(holdInputs);
    return;

}

function pressedDecimal(e) {
    const decimal = document.querySelector(`button[data-decimal="${e.key}"]`);
    if (!decimal) {
        return;
    }

    if(holdInputs.includes('.')){
        return
    }
    holdInputs.push(e.key);
    return;
}

function clickedNumber(e) {
    const number = document.querySelector(`button[data-number="${e.target.dataset.number}"]`);
    if(!number){
        return;
    }
    holdInputs.push(e.target.dataset.number);
    displayOnScreen(e.target.dataset.number);
    return;

}

function clickedOperator(e) {
    const operator = document.querySelector(`button[data-operator="${e.target.dataset.operator}"]`);
    if(!operator){
        return;
    }
    calculatorObj.setOperandOne = joinArray(holdInputs);
    calculatorObj.setOperation = e.target.dataset.operator;
    displayOnScreen(e.target.dataset.operator);
    clearArray(holdInputs);
    return;
}

function clickedEvaluate(e) {
    const evaluate = document.querySelector(`button[data-evaluate="${e.target.dataset.evaluate}"]`);
    if(!evaluate){
        return;
    }


    calculatorObj.setOperandTwo = joinArray(holdInputs);
    currentAnswer = operate(calculatorObj.getOperandOne, calculatorObj.getOperandTwo, calculatorObj.getOperation);
    savePreviousAnswer(currentAnswer);
    displayOnScreen(`${e.target.dataset.evaluate}${currentAnswer}` );
    clearArray(holdInputs);
    return;
}

function clickedDecimal(e) {
    const decimal = document.querySelector(`button[data-decimal="${e.target.dataset.decimal}"]`);
    if(!decimal){
        return;
    }
    if(holdInputs.includes('.')){
        return
    }
    holdInputs.push(e.target.dataset.decimal);
    return;
}


window.addEventListener('keydown', pressedNumber);
window.addEventListener('keydown', pressedOperator);
window.addEventListener('keydown', pressedEvaluate);
window.addEventListener('keydown', pressedDecimal);



buttons.forEach(button => button.addEventListener('mousedown', clickedNumber));
buttons.forEach(button => button.addEventListener('mousedown', clickedOperator));
buttons.forEach(button => button.addEventListener('mousedown', clickedEvaluate));
buttons.forEach(button => button.addEventListener('mousedown', clickedDecimal));



function displayOnScreen(content){
    const screenContent = document.createTextNode(content);
    screenDiv.appendChild(screenContent);
}

function clearScreen(){
    screenDiv.textContent = '';
}

function backSpaceOnScreen(e){
    let newText = '';
    let text = screenDiv.textContent;
    deleteLastInput(holdInputs);
    newText = text.slice(0,-1);
    screenDiv.textContent = newText;
    return;
}

function pressedBackSpaceOnScreen(e){
    let newText = '';
    let text = screenDiv.textContent;

    if(e.key !== 'Backspace'){
        return;
    }
    
    deleteLastInput(holdInputs);
    newText = text.slice(0,-1);
    screenDiv.textContent = newText;
    return;
}

backSpaceBtn.addEventListener('mousedown', backSpaceOnScreen)
window.addEventListener('keydown', pressedBackSpaceOnScreen)