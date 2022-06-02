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
    

let calculator = {

    operandOne: 0,
    operandTwo: 0,
    operation: '',
    set setOperandOne(operandOne){
        this.operandOne = operandOne;
    },
    set setOperandTwo(operandTwo){
        this.operandTwo = operandTwo;
    },
    set setOperation(operation){
        this.operation = operation;
    },
    get getOperandOne(){
        return this.operandOne;
    },
    get getOperandTwo(){
        return this.operandTwo;
    },
    get getOperation(){
        return this.operation;
    }
}
