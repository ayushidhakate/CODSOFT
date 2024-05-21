let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    const operators = ['+', '-', '*', '/'];
    let currentNumber = '';
    let result = 0;
    let currentOperator = '+';

    for (let i = 0; i < displayValue.length; i++) {
        const char = displayValue[i];

        if (char === '+' || char === '-' || char === '*' || char === '/') {
            if (currentNumber !== '') {
                result = performOperation(result, currentNumber, currentOperator);
                currentNumber = '';
            }
            currentOperator = char;
        } else {
            currentNumber += char;
        }
    }

    if (currentNumber !== '') {
        result = performOperation(result, currentNumber, currentOperator);
    }

    document.getElementById('display').value = result;
    displayValue = ''; 
}

function performOperation(result, currentNumber, currentOperator) {
    switch (currentOperator) {
        case '+':
            result += parseFloat(currentNumber);
            break;
        case '-':
            result -= parseFloat(currentNumber);
            break;
        case '*':
            result *= parseFloat(currentNumber);
            break;
        case '/':
            if (parseFloat(currentNumber) === 0) {
                document.getElementById('display').value = 'Error: Division by zero';
                throw new Error('Division by zero');
            }
            result /= parseFloat(currentNumber);
            break;
    }
    return result;
}
