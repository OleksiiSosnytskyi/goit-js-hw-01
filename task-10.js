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

const maxNum = function () {
  // Variant1
  //    console.log(Math.max(...arguments))
  // Variant2
  // let maxNum = 0;
  //  for(let el of [...arguments]) {
  //  el > maxNum ? maxNum = el : '';
  //  }
  //  console.log(maxNum)
};

max = (1, 2, 3, 4, 5, 6, 7, 8);
