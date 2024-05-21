// Задание на отработку методов массива. В решение необходимо использовать только методы (цикл for использовать запрещено)

// Задан массив goods:

let goods = [
   {id: 1, title: 'Микроволновка', price: 1500, count: 4},
   {id: 2, title: 'Телевизор', price: 2500, count: 1},
   {id: 3, title: 'Тумба', price: 5500, count: 5},
   {id: 4, title: 'Холодильник', price: 200, count: 2},
   {id: 5, title: 'Стол', price: 5600, count: 5},
   {id: 6, title: 'Телефон', price: 1900, count: 12},
   {id: 7, title: 'Компьютер', price: 4200, count: 11},
   {id: 8, title: 'Мангал', price: 250, count: 7},
   {id: 9, title: 'Люстра', price: 300, count: 3},
]


// Используя этот массив, необходимо решить ряд задач:

// 1. Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
// let filteredGoods = goods.filter(item => item.id % 2 === 0);

// console.log(filteredGoods);


//2. Отфильтруйте продукты с количеством менее 5 единиц

// let filteredGoods = goods.filter(item => item.count < 5);

// console.log(filteredGoods);

// 3. Найдите значение элемента массива (продукта), цена которого будет кратна 5
// let product = goods.find(item => item.price % 5 === 0);

// console.log(product);

// 4. Найдите индекс элемента, count которого будет больше 11
// let index = goods.findIndex(item => item.count > 11);

// console.log(index);

// 5.Посчитайте количество элементов, count которых является нечетным числом
// let oddCountElements = goods.filter(item => item.count % 2 !== 0).length;

// console.log(oddCountElements);

// 6.Посчитайте количество элементов, имя которых начинается на “Т”
// let count = goods.reduce((acc, item) => acc + (item.title.startsWith('Т') ? 1 : 0), 0);

// console.log(count);
// 7.Проверьте, есть ли хотя бы один продукт с ценой выше 500.
// let products = goods.reduce(item => item.price > 500);// или some

// console.log(products);
//8. Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)
// let total = goods.map(item => item.price * 0.65);

// console.log(total)
// 9.Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)
let update = goods.map(item => ({...item, count: 0}));

console.log(update);
