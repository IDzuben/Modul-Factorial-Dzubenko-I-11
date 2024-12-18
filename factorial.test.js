
const factorial = require('./factorial');

function logTestResult(input, expected, actual) {
    console.log(`Тест: факторіал числа ${input} має дорівнювати ${expected}`);
    console.log(`Результат: ${actual === expected ? 'Успішно' : 'Помилка'}`);
}

test('Обчислення факторіалу 0 має дорівнювати 1', () => {
    const input = 0;
    const expected = 1;
    const actual = factorial(input);
    logTestResult(input, expected, actual);
    expect(actual).toBe(expected);
});

// Тестування факторіалу для 1
test('Обчислення факторіалу 1 має дорівнювати 1', () => {
    expect(factorial(1)).toBe(1);
});

// Тестування факторіалу для 5
test('Обчислення факторіалу 5 має дорівнювати 120', () => {
    expect(factorial(5)).toBe(120);
});

// Тестування факторіалу для 10
test('Обчислення факторіалу 10 має дорівнювати 3628800', () => {
    expect(factorial(10)).toBe(3628800);
});

// Тестування факторіалу для 15
test('Обчислення факторіалу 15 має дорівнювати 1307674368000', () => {
    expect(factorial(15)).toBe(1307674368000);
});

// Перевірка на від’ємні числа
test('Має викидати помилку для від’ємних чисел', () => {
    expect(() => factorial(-5)).toThrow("Факторіал не визначений для від'ємних чисел.");
});

// Перевірка на дробові числа
test('Має викидати помилку для дробових чисел', () => {
    expect(() => factorial(5.5)).toThrow("Факторіал визначений лише для цілих чисел.");
});

