function updateButtons() {
            const fromNumberSystem = document.querySelector('input[name="fromNumberSystem"]:checked').value;
            const toNumberSystem = document.querySelector('input[name="toNumberSystem"]:checked').value;

            const buttons = ['btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9', 'btnA', 'btnB', 'btnC', 'btnD', 'btnE', 'btnF'];

            buttons.forEach(buttonId => {
                const button = document.getElementById(buttonId);

                if (
                    (fromNumberSystem === 'binary' && parseInt(button.innerText, 16) <= 1) ||
                    (fromNumberSystem === 'decimal' && parseInt(button.innerText, 16) <= 9) ||
                    (fromNumberSystem === 'octal' && parseInt(button.innerText, 16) <= 7) ||
                    (fromNumberSystem === 'hexadecimal' && !isNaN(parseInt(button.innerText, 16)))
                ) {
                    button.disabled = false;
                } else {
                    button.disabled = true;
                }
            });

            const toNumberSystemRadios = document.getElementsByName('toNumberSystem');
            toNumberSystemRadios.forEach(radio => {
                radio.disabled = radio.value === fromNumberSystem;
            });

            resetCalculator();
        }

        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById('userInput').value = displayValue;
        }

        function convert() {
            const fromNumberSystem = document.querySelector('input[name="fromNumberSystem"]:checked').value;
            const toNumberSystem = document.querySelector('input[name="toNumberSystem"]:checked').value;

            if (displayValue.trim() === '') {
                alert('Please enter a value to convert.');
                return;}

            if (fromNumberSystem === toNumberSystem) {
                alert('Cannot perform the same conversion. Please choose different options.');
                return;
            }

            let result;
            if (fromNumberSystem === 'binary' && toNumberSystem === 'decimal') {
                result = parseInt(displayValue, 2);
            } else if (fromNumberSystem === 'binary' && toNumberSystem === 'octal') {
                result = (parseInt(displayValue, 2)).toString(8);
            } else if (fromNumberSystem === 'binary' && toNumberSystem === 'hexadecimal') {
                result = (parseInt(displayValue, 2)).toString(16).toUpperCase();
            } else if (fromNumberSystem === 'decimal' && toNumberSystem === 'binary') {
                result = (parseInt(displayValue)).toString(2);
            } else if (fromNumberSystem === 'decimal' && toNumberSystem === 'octal') {
                result = (parseInt(displayValue)).toString(8);
            } else if (fromNumberSystem === 'decimal' && toNumberSystem === 'hexadecimal') {
                result = (parseInt(displayValue)).toString(16).toUpperCase();
            } else if (fromNumberSystem === 'octal' && toNumberSystem === 'binary') {
                result = (parseInt(displayValue, 8)).toString(2);
            } else if (fromNumberSystem === 'octal' && toNumberSystem === 'decimal') {
                result = parseInt(displayValue, 8);
            } else if (fromNumberSystem === 'octal' && toNumberSystem === 'hexadecimal') {
                result = (parseInt(displayValue, 8)).toString(16).toUpperCase();
            } else if (fromNumberSystem === 'hexadecimal' && toNumberSystem === 'binary') {
                result = (parseInt(displayValue, 16)).toString(2);
            } else if (fromNumberSystem === 'hexadecimal' && toNumberSystem === 'decimal') {
                result = parseInt(displayValue, 16);
            } else if (fromNumberSystem === 'hexadecimal' && toNumberSystem === 'octal') {
                result = (parseInt(displayValue, 16)).toString(8);
            } else {
                result = displayValue;
            }

            document.getElementById('userInput').value = result;
        }

        function backspace() {
            displayValue = displayValue.slice(0, -1);
            document.getElementById('userInput').value = displayValue;
        }

        function resetCalculator() {
            displayValue = '';
            document.getElementById('userInput').value = '';
        }
        function logout() {
            alert('Logging Out...');
            window.location.href = 'login.html';
        }