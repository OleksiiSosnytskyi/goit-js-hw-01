// #1

// let price = 1000;
// const name = 'Генератор защитного поля';

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// #2

// const total = 100;
// const ordered = 50;

// if (total < ordered) {
//     console.log('На складе недостаточно товаров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// #3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let password = prompt('введите ваш пароль');
// console.log(password);

// if (password === null) {
//     message = 'Отменено пользователем!';
// } else if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// #4

// let credits = 23580;
// const pricePerDroid = 3000;
// let quantity = prompt('сколько дроидов вы хотите купить?');

// let totalPrice = Number(quantity) * pricePerDroid;

// if (quantity === null) {
//     console.log('Отменено пользователем!');
// } else if (totalPrice > credits) {
//     console.log('Недостаточно средств на счету!');
// } else {
//     let creditsBalance = credits - totalPrice;
//     console.log(
//         `Вы купили ${quantity} дроидов, на счету осталось ${creditsBalance} кредитов.`,
//     );
// }

// #5

// let country = prompt('Укажите страну доставки').toLowerCase();
// let price;

// switch (country) {
//     case 'китай':
//         price = 100;
//         break;

//     case 'чили':
//         price = 250;
//         break;

//     case 'австралия':
//         price = 170;
//         break;

//     case 'индия':
//         price = 80;
//         break;

//     case 'ямайка':
//         price = 120;
//         break;

//     default:
//         alert('В вашей стране доставка не доступна');
// }

// if (price !== null) {
//     alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }

// #6

// let total = 0;
// let input;

// do {
//     input = prompt('Введите любое число');
//     const inputNumber = Number(input);
//     total = total + inputNumber;
// } while (input !== null);

// console.log('total', total);
