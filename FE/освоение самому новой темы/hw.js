// Задача 1.
// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики.

// let currentTime = Date.now()
//  let countHours = Math.round((currentTime / (1000 * 60 * 60)));//...ваш код

// console.log(countHours)

// ---------------------------------
// Задача 2
// Какое количество дней прошло с начала 2000 года до текущего момент времени?
// Примечание: полученное значение округлите по правилам математики
// let currentTime = new Date();
// let startYear2000 = new Date('2000-01-01').getTime();
// let daysPassed = Math.round((currentTime - startYear2000) / (1000 * 60 * 60 * 24));
// console.log(daysPassed);
// ---------------------------------
// Задача 3. 
// Напишите функцию getWeekDay(), которая в зависимости от даты 
// (текущего момента времени) в консоль выводит день недели согласно результату
// function getWeekDay() {
//     const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//     const currentDate = new Date();
//     const dayOfWeek = days[currentDate.getDay()];
//     console.log(`Сегодня ${dayOfWeek}`);
// }

// // Пример вызова функции
// getWeekDay();
// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

// --------------------------------
// Задача 4. 
// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции
function checkDate() {
    let currentDate = new Date();
    let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysToEndOfMonth = lastDayOfMonth.getDate() - currentDate.getDate();
    console.log(`До конца текущего месяца осталось ${daysToEndOfMonth} дней`);
}
checkDate();
