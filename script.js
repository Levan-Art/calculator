const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '%') {
            try {
                // გამოანგარიშე მიმდინარე მნიშვნელობა
                let result = eval(currentInput);
                // გადააქციე პროცენტად
                result = result / 100;
                currentInput = result.toString();
                display.value = currentInput;
            } catch {
                currentInput = 'Error';
                display.value = currentInput;
            }
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                currentInput = 'Error';
                display.value = currentInput;
            }
        } else {
            if (currentInput === 'Error') currentInput = '';
            currentInput += value;
            display.value = currentInput;
        }
    });
});
