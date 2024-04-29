
// Напишите функцию checkEmail(string), которая в качестве аргумента будет получать строковый тип. Функция должна проверить, есть ли в строке символ “@” и “.” Если оба символа будут находиться в строке - функция должна вернуть true, в противном случае false

// function checkEmail(string) {
//     return string.includes('@') && string.includes('.');
// }
// let result1 = checkEmail("some@email.com");
// let result2 = checkEmail("some@emailcom");

// console.log(result1); // Выведет: true
// console.log(result2); // Выведет: false

// 	Пример:
// 	let result1 = checkEmail(“some@email.com”)
// 	let result2 = checkEmail(“some@emailcom”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	true
// 	false
//-------------------------------------------

// Напишите функцию initCap(string), которая получает строковое значение и возвращает эту же строку с заглавной первой буквой по примеру: 
// function initCap(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// let result1 = initCap("sam");
// let result2 = initCap("steven");

// console.log(result1); // Выведет: Sam
// console.log(result2); // Выведет: Steven
//  Пример:
// 	let result1 = initCap(“sam”)
// 	let result1 = initCap(“steven”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	Sam
// Steven
//--------------------------------------------
// Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array), которая будет получать в качестве аргумента массив и реализует очистку данных. Каждый номер карты нужно переопределить, заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// function clearDataCards(array) {
//     return array.map(card => {
//         let firstPart = card.slice(0, 4);
//         let lastPart = card.slice(-4);
//         let maskedPart = card.slice(4, -4).replace(/\d/g, '*');
//         return firstPart + maskedPart + lastPart;
//     });
// }

// let cards = [ 
//     '4000 0012 0056 9499', 
//     '4000 0013 5456 7379', 
//     '4000 0014 1456 9869', 
//     '4000 0015 3466 7859',
//     '4000 0016 3556 6899', 
//     '4000 0017 4456 4699' 
// ];

// console.log(clearDataCards(cards));
//-----------------------------
// Задан массив elems, передающий элемент HTML разметки. 
// Создайте функцию clearData(array), которая будет получать в качестве аргумента массив и реализует очистку данных по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

function clearData(array) {
    return array.map(elem => {
        let startIndex = elem.indexOf('>') + 1;
        let endIndex = elem.lastIndexOf('<');
        return elem.substring(startIndex, endIndex);
    });
}
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 

// clearData(array)

	// Результат: ['Home','About','FAQ','Contacts']

console.log(clearData(elems));