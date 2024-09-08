
let operationsLable = document.getElementById('operations-label');
let resultLabel = document.getElementById('result-label');

let userIsInTheMiddleOfTypingANumber = false;
let userDoesNotClickedOperationButton = true;
let notCalculated = true;

let stock = [];
let operater = '';
let result = 0.0;


function appendNumber(digit) {
    if (userIsInTheMiddleOfTypingANumber && notCalculated) {
        if (digit == '.' && operationsLable.textContent.includes('.')) { return }
        operationsLable.textContent +=  digit;
    }
    else {
        if (digit != '0' && notCalculated) {
            if (digit == '.') { 
                operationsLable.textContent = `0${digit}`;
                userIsInTheMiddleOfTypingANumber = true;
                return;
             }
            operationsLable.textContent = digit;
            userIsInTheMiddleOfTypingANumber = true;
        }   
    }
}


function appendOperation(oper) {
    if (userIsInTheMiddleOfTypingANumber && userDoesNotClickedOperationButton) {
        userIsInTheMiddleOfTypingANumber = false;
        userDoesNotClickedOperationButton = false;
        let x = 0.0;
        if (operationsLable.textContent == '.') {
            stock.push(parseFloat(x));
            operater = oper;
            operationsLable.textContent = oper;
            return;
        }
        stock.push(parseFloat(operationsLable.textContent));
        operater = oper;
        operationsLable.textContent = oper;    
    }
}


function doCalculation() {
    if ((stock.length == 1) && (operater.length != 0) && (userIsInTheMiddleOfTypingANumber)) 
    {
        return true;
    }
    else {
        return false;
    }
}


function calculation() {
    let result = 0.0;
    switch (operater) {
        case '+':
            result = stock[0] + stock[1];
            return result;
        case '-':
            result = stock[0] - stock[1];
            return result;
        case '*':
            result = stock[0] * stock[1];
            return result;
        case '/':
            result = stock[0] / stock[1];
            return result;
        default:
            break;
    }
}


function showResult() {
    if (stock.length == 2) {
        userIsInTheMiddleOfTypingANumber = false;
        userDoesNotClickedOperationButton = true;
        notCalculated = false;
        result = calculation().toFixed(2).replace(/\.0+$/, '');
        operationsLable.textContent = `${stock[0]} ${operater} ${stock[1]}`;
        resultLabel.textContent = `= ${result}`;
        operater = '';
    }
}


function calculate() {
    if (doCalculation()) {

        if (operationsLable.textContent == '.') {
            let x = 0.0;
            stock.push(parseFloat(x));
            showResult();
            return;
        }

        stock.push(parseFloat(operationsLable.textContent));
        showResult();
    }
}


function clearScreen() {  
    operationsLable.textContent = '0';
    resultLabel.textContent = '=';
    userIsInTheMiddleOfTypingANumber = false;
    userDoesNotClickedOperationButton = true;
    notCalculated = true;
    stock = [];
    operater = '';
    result = 0.0;
}