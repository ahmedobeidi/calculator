
let operationsLable = document.getElementById('operations-label');
let resultLabel = document.getElementById('result-label');

let userIsInTheMiddleOfTypingANumber = false;
let userClickedOperationButton = false;
let programStoped = false;
let numberZeroBlocked = false;

let mathString = '';
let numbersStock = [];
let operatersStock = [];
let result = 0.0;


function appendNumber(digit) {
    if (!programStoped) {
        if (userIsInTheMiddleOfTypingANumber && !numberZeroBlocked) {
            if ((digit == '.') && (operationsLable.textContent.includes('.'))) { return } 
            operationsLable.textContent += digit; 
        }
        else { 
            if (digit == '0') { 
                operationsLable.textContent = '0';
                numberZeroBlocked = true;
                userIsInTheMiddleOfTypingANumber = true;
                userClickedOperationButton = true; 
                return 
            }
            if ((digit == '.') && (!operationsLable.textContent.includes('.'))) { 
                operationsLable.textContent = '0.';
                userIsInTheMiddleOfTypingANumber = true;
                userClickedOperationButton = true;
                numberZeroBlocked = false;
                return 
            }
            if (!operationsLable.textContent.includes('0') && !operationsLable.textContent.includes('0')) {
                operationsLable.textContent = digit;
                userIsInTheMiddleOfTypingANumber = true;
                userClickedOperationButton = true; 
            }
            
        }
    }
}


function appendOperation(operater) {
    if (!programStoped) {
        if (userClickedOperationButton) {
        numbersStock.push(parseFloat(operationsLable.textContent));
        operatersStock.push(operater);
        resultLabel.textContent += `${operationsLable.textContent} ${operater} `;
        operationsLable.textContent = '> ';
        userIsInTheMiddleOfTypingANumber = false;
        userClickedOperationButton = false; 
        }
    }
}

function calculate() {
    if (!programStoped && userIsInTheMiddleOfTypingANumber) {
        if (operationsLable.textContent == '0.') { operationsLable.textContent = '0.0'}
        if (operationsLable.textContent.endsWith('.')) { 
            operationsLable.textContent = operationsLable.textContent.slice(0, operationsLable.textContent.length - 1);
         }
        numbersStock.push(parseFloat(operationsLable.textContent));
        resultLabel.textContent += operationsLable.textContent;
        operationsLable.textContent = '';
        if ((numbersStock.length - 1) == (operatersStock.length)) {
            for (let i = 0; i < numbersStock.length; i++) {        
                operationsLable.textContent += numbersStock[i];
                if (typeof operatersStock[i] != 'undefined') {
                    operationsLable.textContent += `${operatersStock[i]}`; 
                }
            }
            mathString = operationsLable.textContent;
            result = eval(mathString);
            operationsLable.textContent = result;
            programStoped = true;
        }
    } 
}


function clearScreen() {  
    userIsInTheMiddleOfTypingANumber = false;
    userClickedOperationButton = false;
    programStoped = false;
    numberZeroBlocked = false;
    mathString = '';
    numbersStock = [];
    operatersStock = [];
    result = 0.0;
    operationsLable.textContent = '> ';
    resultLabel.textContent = '> ';
}
