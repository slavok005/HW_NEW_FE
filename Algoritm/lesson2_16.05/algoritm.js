const sortByZeros = (arr) => arr.sort((a, b) => a === 0 ? 1 : b === 0 ? -1 : 0);

// Пример использования
let array = [2, 0, 5, 0, 1, 0, 3];
sortByZeros(array);
console.log(array); // Выведет: [2, 5, 1, 3, 0, 0, 0]