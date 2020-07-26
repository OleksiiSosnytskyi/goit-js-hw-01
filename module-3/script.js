// _________________ # 1 _________________________
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key, ':', user[key]);
// }
//
//
//  ____________________ # 2 __________________________
// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.Функция возвращает число - количество свойств.
// const countProps = function (obj) {
//   const summ = Object.keys(obj).length;
//   return summ;
// };
//
//
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
//
//
//  _______________________ # 3 ___________________________
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".
// const findBestEmployee = function (employees) {
//   for (let key in employees) {
//     if (employees[key] === Math.max(...Object.values(employees))) return key;
//   }
// };
// //
// //
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
//  _______________________ # 4 ___________________________
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму запрплаты работников и возращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
// const countTotalSalary = function (employees)
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330
// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
//
//
//
//  _______________________ # 5 ___________________________
//
//
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// const getAllPropValues = function (arr, prop) {
//   const result = [];
//   for (let el of arr) {
//     for (let key in el) {
//       if (key === prop) {
//         result.push(el[key]);
//       }
//     }
//   }
//   return result;
// };
// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []
//
//
//  _________________________________ # 6 ____________________________
//
//
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let price;
//   let quantity;
//   // твой код
//   for (let obj of allProdcuts) {
//     for (let item in obj) {
//       if (obj[item] === productName) {
//         price = obj.price;
//         quantity = obj.quantity;
//       }
//     }
//   }
//   return price * quantity;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800