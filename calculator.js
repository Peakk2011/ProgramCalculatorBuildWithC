let currentNumber = '0';
let previousNumber = '';
let operation = null;
let shouldResetScreen = false;

const display = document.querySelector('.display');

function updateDisplay() {
    display.textContent = currentNumber;
}

function appendNumber(number) {
    if (shouldResetScreen) {
        currentNumber = number.toString();
        shouldResetScreen = false;
    } else {
        currentNumber = currentNumber === '0' ? number.toString() : currentNumber + number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function toggleSign() {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay();
}

function percentage() {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay();
}

function setOperator(op) {
    if (operation !== null) calculate();
    previousNumber = currentNumber;
    operation = op;
    shouldResetScreen = true;
}

function calculate() {
    if (operation === null || shouldResetScreen) return;
    
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result;

    switch (operation) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '×': result = prev * current; break;
        case '÷': result = current !== 0 ? prev / current : 'Error'; break;
        default: return;
    }

    currentNumber = result.toString();
    operation = null;
    shouldResetScreen = true;
    updateDisplay();
}
