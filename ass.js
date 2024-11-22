$(document).ready(function() {
    let display = $('#display');
    let currentInput = '';
    let currentOperation = null;
    let previousInput = '';

    // Handle number clicks
    $('.number, .decimal').click(function() {
        let value = $(this).text();
        
        // Prevent multiple decimal points
        if (value === '.' && currentInput.includes('.')) {
            return;
        }
        
        currentInput += value;
        display.val(currentInput);
    });

    // Handle operator clicks
    $('.operator').click(function() {
        if (currentInput !== '') {
            if (previousInput !== '') {
                calculate();
            }
            previousInput = currentInput;
            currentInput = '';
            currentOperation = $(this).text();
        }
    });

    // Handle equals click
    $('.equals').click(function() {
        if (currentInput !== '' && previousInput !== '') {
            calculate();
        }
    });

    // Handle clear click
    $('.clear').click(function() {
        currentInput = '';
        previousInput = '';
        currentOperation = null;
        display.val('');
    });

    // Handle backspace click
    $('.backspace').click(function() {
        currentInput = currentInput.slice(0, -1);
        display.val(currentInput);
    });

    // Calculate function
    function calculate() {
        let prev = parseFloat(previousInput);
        let current = parseFloat(currentInput);
        let result;

        switch(currentOperation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }

        display.val(result);
        currentInput = result.toString();
        previousInput = '';
        currentOperation = null;
    }
});