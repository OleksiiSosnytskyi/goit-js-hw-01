// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.round((styles.length - 1) / 2)] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

//

// const max = function Math.max(...max) { max(1, 2, 3, 4, 5, 6, 7, 8);};

// const max = function (...rest) {
//   max(1, 2, 3, 4, 5, 6, 7, 8);
//   const MAX = Math.max(max);
//   return MAX;
//   console.log(MAX);
// };

// const maxNum = function () {
// Variant1
//    console.log(Math.max(...arguments))
// Variant2
// let maxNum = 0;
//  for(let el of [...arguments]) {
//  el > maxNum ? maxNum = el : '';
//  }
//  console.log(maxNum)
// };

// max = (1, 2, 3, 4, 5, 6, 7, 8);

// 1) Function declaration => expression
// 2) If => тернарником
// 3) В вызове сделать стрелочные функции

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ____________________________________

// const ask = function (question, yes, no) {
//   confirm(question) === true ? yes() : no();
// };
// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.'),
// );

// ask('Вы согласны?'
//   () => alert('Вы согласились.');
// () => alert('Вы отменили выполнение.'));

//___________________________________

// Напишите функцию hello(), которая при вызове будет принимать переменную name(например, «Василий») и
// выводить строку(в нашем случае «Привет, Василий»).В случае отсутствующего аргумента выводить «Привет, гость»

// const hello = function (name = 'Гость') {
//   console.log(`Привет ${name}`);
// };

// hello('Василий');

//___________________________________
// #3
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из
//  n повторений строки str. n — по умолчанию 2, str — пустая строка

// const repeat = function (str = '', n = 2) {
//   console.log(str.repeat(n));
// };
// repeat('123', 3);
