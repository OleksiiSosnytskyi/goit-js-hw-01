// ___________________  # 1 ___________________________
// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
//
//
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} --> ${array[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// __________________________ # 2 __________________________
//
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let arr = message.split(' ').length;
//   return arr * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// );
//
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// __________________________ # 3 _________________________
//
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   let max = 0;
//   let word;

//   for (let i = 0; i < string.split(' ').length; i++) {
//     let www = string.split(' ')[i].length;
//     //   console.log(www);
//     if (www > max) {
//       max = www;
//       word = string.split(' ')[i];
//     }
//   }
//   return word;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// let string = 'May the force be with you';

//
//

// _____________ # 4 ______________________________________

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   if (string.length > 40) {
//     let stringLength = string.split('').splice(0, 40).join('');
//     string = stringLength + '...';
//   }
//   return string;
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
//
//
// _________________ # 5 ______________________

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   const arr = message
//     .toLowerCase()
//     .replace(/[.*+?^${}()|[\]\\]/g, '')
//     .split(' ');
//   console.log(arr);
//   return arr.includes('spam') || arr.includes('sale');
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
//
//
// ____________________ # 6 ___________________________
//
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//   input = prompt('Введите число');
//   if (!isNaN(input)) {
//     numbers.push(Number(input));
//   } else {
//     alert('Было введено не число, попробуйте еще раз');
//   }
// }
// if (numbers.length > 0) {
//   for (let number of numbers) {
//     total += number;
//   }
// }
// console.log('Общая сумма чисел равна:', total);
