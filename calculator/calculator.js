const display = document.querySelector('.screen');
const buttons = document.querySelectorAll('.numbuttons, .buttons, .equal-button, .clear-button, .back, .sqrt-button, .cbrt-button');

let currentNumber = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'Clear') {
      display.textContent = '';
      currentNumber = '';
      
    } else if (value === 'DEL') {
      currentNumber = currentNumber.slice(0, -1);
      display.textContent = currentNumber;
    } else if (value === '=') {
      try {
        display.textContent = eval(currentNumber);
        currentNumber = '';
       
      } catch (e) {
        display.textContent = 'Error';
        currentNumber = '';
        
      }
    } else if (value === '√') {
      try {
        const num = parseFloat(currentNumber);
        display.textContent = Math.sqrt(num);
        currentNumber = '';
        
      } catch (e) {
        display.textContent = 'Error';
        currentNumber = '';
       
      }
    } else if (value === '³√') {
      try {
        const num = parseFloat(currentNumber);
        display.textContent = Math.cbrt(num);
        currentNumber = '';
        
      } catch (e) {
        display.textContent = 'Error';
        currentNumber = '';
       
      }
    } else {
      currentNumber += value;
      display.textContent = currentNumber;
    }
  });
});