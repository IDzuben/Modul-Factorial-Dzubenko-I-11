function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error("Факторіал визначений лише для цілих чисел.");
    }
    if (n < 0) {
        throw new Error("Факторіал не визначений для від'ємних чисел.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports = factorial;