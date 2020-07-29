// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара(сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// price = 2000;
// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
// -----------------------------------------------------------

// Напиши скрипт проверки количества товаров на складе.Есть переменные total(количество товаров на складе) и ordered(единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

//

// const total = 100;
// const ordered = 50;
// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

//  --------------------------------------------------------

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let password = prompt('введите пароль');

// console.log(password);
// if (password === null) {
//   message = 'Отменено пользователем!';
// } else if (ADMIN_PASSWORD === password) {
//   message = 'Добро пожаловать!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// }
// console.log(message);
// -------------------------------------------------------------

// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.В prototype функции - конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   console.log('login :', this.login, '; email :', this.email);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// ------------------------------------------------------------

// let storeStatistics = {
//   socks: 0,
//   dress: 0,
//   jacket: 0,
// };
// console.log(storeStatistics);

// const Sell = function (color, size, type, amount) {
//   this.color = color;
//   this.size = size;
//   this.type = type;
//   this.amount = amount;
//   this.message = function () {
//     console.log('You have ordered ', amount, color, type, 'size ', size);
//   };
//   this.statistics = function () {
//     for (let key in storeStatistics) {
//       if (key === type) {
//         storeStatistics[key] += amount;
//       }
//     }
//   };
// };

// const firstSell = new Sell('blue', 'M', 'socks', 3);
// const secondSell = new Sell('blue', 'M', 'dress', 2);
// const thirdSell = new Sell('blue', 'M', 'socks', 1);

// // storeStatistics.order('socks');

// console.log(firstSell);

// firstSell.message();
// firstSell.statistics();
// secondSell.statistics();
// thirdSell.statistics();

// console.log(firstSell);
// console.log(storeStatistics);

// console.log(firstSell);

// class Student {
//   constructor() {}
// }

// console.log(typeof Student === 'object');

// console.log(typeof Student === 'class');

// console.log(typeof Student === 'function');

// let A = Object.create(null);
// console.log(A);

// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

// class User {
//   constructor({ name, age, followers }) {
//     this._name = name;
//     this._age = age;
//     this._followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this._name} is ${this._age} years old and has ${this._followers} followers`,
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems(items) {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);
// console.log(storage);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
// ---------------------------------------------------------

// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str(строку) и добавляет ее в начало и в конец _value

// class StringBuilder {
//   constructor(str) {
//     this._value = str;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = this._value + str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

//  ------------------------  5 ----------------------------------

// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */
//   static getSpecs(car) {
//     console.log(
//       'MaxSpeed = ',
//       car.maxSpeed,
//       ';  Speed = ',
//       car.speed,
//       ';  isOn = ',
//       car.isOn,
//       ';  distance = ',
//       car.distance,
//       ';  price = ',
//       car.price,
//     );
//   }

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({ price, maxSpeed }) {
//     this.speed = 0;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
//   get price() {
//     return this._price;
//   }

//   set price(newprice) {
//     this._price = newprice;
//   }
//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value > 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn === true) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// -----------------------------  ЗАНЯТИЕ с ВАЛЕРОЙ ----------------------------------------------

// 1) Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе.
// 2) Дан массив['a', 'b', 'c'].Добавьте ему в конец элементы 1, 2, 3.
// 3) Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].
// 4) Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[1, 2, 3].

// 5) Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].

// // const a = [1, 2, 3, 4, 5];

// (((((((((((((((((((1)))))))))))))))))))

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];

// const ab = a.concat(b);

// console.log(ab);

// --------------------------------------2

// const a = ['a', 'b', 'c'];
// a.push(1, 2, 3);
// console.log(a);

// -------------------------3

// const b = [1, 2, 3];
// b.reverse();
// console.log(b);

// ------------------------4

// const a = [1, 2, 3, 4, 5];
// const b = a.slice(0, 3);
// console.log(b);

// -------------5

// const a = [1, 2, 3, 4, 5];
// a.splice(1, 2);
// console.log(a);

// // 1) Вибираємо випадкове число (від 0 до довжини масива);
// const a = [1, 2, 3, 4, 5];
// // console.log(a.length);
// console.log(Math.round(Math.random() * a.length));

// ---------------2-------
// -) Записуємо в змінну строку з промта
// -) Зробити строку масивом
// -) Скопіювати масив в нову змінну
// -) Реверсимо масив
// -) З масивів робимо строки

// const a = prompt();
// const c = a.split(' ').reverse().join(' ');
// // c.reverse();
// // c.join(' ');

// console.log(c);

// ------------------------   ИГРА  КАМЕНЬ-НОЖНИЦЫ-БУМАГА ---------------------------------------

// const arr = ['камень', 'ножницы', 'бумага'];

// let MYCHOISE;
// const INPUT = [];
// let COMPCHOISE = arr[Math.round(Math.random() * (arr.length - 1))];

// while (MYCHOISE !== null) {
//   MYCHOISE = prompt('Введите "камень", "ножницы" или "бумага"');
//   if (
//     MYCHOISE === 'камень' ||
//     MYCHOISE === 'ножницы' ||
//     MYCHOISE === 'бумага'
//   ) {
//     INPUT.push(MYCHOISE);

//     if (COMPCHOISE === 'камень' && INPUT[INPUT.length - 1] === 'ножницы') {
//       console.log(
//         `Искусственный интеллект: ${COMPCHOISE}.   Я: ${
//           INPUT[INPUT.length - 1]
//         }.    Проигрыш :(`,
//       );
//     } else if (
//       COMPCHOISE === 'камень' &&
//       INPUT[INPUT.length - 1] === 'бумага'
//     ) {
//       console.log(
//         `Искусственный интеллект: ${COMPCHOISE}.   Я: ${
//           INPUT[INPUT.length - 1]
//         }.   ПОБЕДА!!!  :)`,
//       );
//     } else if (
//       COMPCHOISE === 'ножницы' &&
//       INPUT[INPUT.length - 1] === 'камень'
//     ) {
//       console.log(
//         `Искусственный интеллект: ${COMPCHOISE}.   Я: ${
//           INPUT[INPUT.length - 1]
//         }.   ПОБЕДА!!!  :)`,
//       );
//     } else if (
//       COMPCHOISE === 'ножницы' &&
//       INPUT[INPUT.length - 1] === 'бумага'
//     ) {
//       console.log(
//         `Искусственный интеллект: ${COMPCHOISE}.   Я: ${
//           INPUT[INPUT.length - 1]
//         }.   Проигрыш :(`,
//       );
//     } else if (
//       COMPCHOISE === 'бумага' &&
//       INPUT[INPUT.length - 1] === 'ножницы'
//     ) {
//       console.log(
//         `Искусственный интеллект: ${COMPCHOISE}.   Я: ${
//           INPUT[INPUT.length - 1]
//         }.   ПОБЕДА!!!  :)`,
//       );
//     } else if (
//       COMPCHOISE === 'бумага' &&
//       INPUT[INPUT.length - 1] === 'камень'
//     ) {
//       console.log(
//         `Искусственный интеллект: ${COMPCHOISE}.   Я: ${
//           INPUT[INPUT.length - 1]
//         }.   Проигрыш :(`,
//       );
//     } else {
//       console.log(
//         'Искусственный интеллект: ',
//         COMPCHOISE,
//         '.   Я:',
//         INPUT[INPUT.length - 1],
//         '.    Ничья! Попробуйте ещё раз! :)',
//       );
//     }
//   } else if (MYCHOISE === null) {
//     console.log('Почему Вы не хотите со мной играть? :(');
//   } else {
//     console.log('Введено некорректное значение. Попробуйте ещё раз! :)');
//   }
// }
// ----------------------------------------------------------------------------------------------
//
// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   static getSpecs(car) {
//     console.log(
//       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
//     );
//   }
//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({ maxSpeed, price }) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this._price = price;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed = this.speed + value;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value >= 0) {
//       this.speed = this.speed - value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn === true) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

//
// ------------------ 29 июля работа с классами с Валерой --------------
//
// --------------- CОЗДАНИЕ СУЩЕСТВ ---------------
//
// let creaturesArr = [];
// class Creature {
//   constructor(type, planet, status, sex) {
//     this.type = type;
//     this.planet = planet;
//     this.status = status;
//     this.sex = sex;
//   }
//   get show() {
//     return `This ${this.type} is from ${this.planet} and has ${this.status} status`;
//   }
//   set changePlanet(str) {
//     this.planet = str;
//     return this.planet;
//   }
//   static intro() {
//     console.log('There is a billions types of creatures all around the world!');
//   }
//   static checkCreatures() {
//     console.log(creaturesArr);
//   }
// }
// class Human extends Creature {
//   constructor(name, type, planet, status, sex, nationality) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       nationlity: this.nationality,
//     });
//   }
// }
// let Adam = new Human(
//   'Adam',
//   'human',
//   'Mars',
//   'three-dimensional',
//   'male',
//   'Ukrainian',
// );
// Adam.addToCreaturesList();
// let Eva = new Human(
//   'Eva',
//   'human',
//   'Venus',
//   'three-dimensional',
//   'female',
//   'Ukrainian',
// );
// Eva.addToCreaturesList();
// Creature.checkCreatures();

// class Droid extends Creature {
//   constructor(model, type, planet, status, isEvil, solarPower) {
//     super(type, planet, status);
//     this.model = model;
//     this.isEvil = isEvil;
//     this.solarPower = solarPower;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.model,
//       planet: this.planet,
//       isEvil: this.isEvil,
//     });
//   }
//   set changeIsEvil(value) {
//     this.isEvil = value;
//     return this.isEvil;
//   }
// }
// let r2d2 = new Droid(
//   'R2-D2',
//   'droid',
//   'Naboo',
//   'two-dimensional',
//   'false',
//   'false',
// );

// let c3po = new Droid(
//   'C-3PO',
//   'droid',
//   'Tatooin',
//   'two-dimensional',
//   'true',
//   'true',
// );

// c3po.changeIsEvil = false;
// r2d2.addToCreaturesList();
// c3po.addToCreaturesList();
// Creature.checkCreatures();
//
//
// ------------------  ЗАДАЧА ПРО СТУДЕНТОВ ---------------
//
//
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.fullName;
    this.course;
  }
  getFullName() {
    return (this.fullName = this.name + ' ' + this.surname);
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getFullName() {
    return (this.fullName = this.name + ' ' + this.surname);
  }

  getCourse() {
    return (this.course = new Date().getFullYear() - this.year);
  }
}

// Вот так должен работать наш класс:
let student = new Student('Иван', 'Иванов', 2017);
console.log(student);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2017
// console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
console.log(student.getCourse(2020));
