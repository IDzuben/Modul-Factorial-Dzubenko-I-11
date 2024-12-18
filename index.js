const factorial = require('./factorial');
try {
    const number = 5; 
    const result = factorial(number);
    console.log(`Факторіал числа ${number} дорівнює ${result}`);
} catch (error) {
    console.error(`Помилка: ${error.message}`);
}