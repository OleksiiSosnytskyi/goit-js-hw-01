// ______OBJECTS___________________________________________________________________________________

// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.

// let schedule = {};

// const isEmpty = function (obj) {
//   for (let key in obj) {
//     return true;
//   }
//   return false;
// };

//    ИЛИ

// const isEmpty = function (obj) {
//   return Object.keys(obj).length === 0 ? true : false;
// };

// alert(isEmpty(schedule)); // true

// schedule['8:30'] = 'get up';

// alert(isEmpty(schedule)); // false
//
//
//
// ---------------2---------
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,

//   Pete: 130,
// };
// let sum = 0;

// for (let salary of Object.values(salaries)) {
//   sum += salary;
// }
// console.log(sum);

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

//
//
// --------------------------3----------------------

// #4
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// const multiplyNumeric = function (obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// };

// multiplyNumeric(menu);
// console.log(menu);
//
//
//
//------------------------23.07-------------
//
//
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// const obj = { name: 'Петр', surname: 'Петров', age: '20 лет' };
// const { name = 'Аноном', surname = 'Анонимович', age = '? лет' } = obj;
// console.log(name, surname, age);

//
// __________________________
//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// const fizzBuzz = function (n) {
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(16);

// ______________________________________
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//   read: function (a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum: function () {
//     const arr = Object.values(calculator);
//     let sum = 0;
//     for (const el of arr) {
//       if (typeof el === 'number') {
//         sum += el;
//       }
//     }
//     return sum;
//   },

//   mul: function () {
//     const arr = Object.values(calculator);
//     let mul = 1;
//     for (const el of arr) {
//       if (typeof el === 'number') {
//         mul *= el;
//       }
//     }
//     return mul;
//   },
// };

// calculator.read(1, 2);
// alert(calculator.sum());
// alert(calculator.mul());

// console.log(calculator);
