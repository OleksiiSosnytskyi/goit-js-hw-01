let credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt('сколько дроидов вы хотите купить?');

let totalPrice = Number(quantity) * pricePerDroid;

if (quantity === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  let creditsBalance = credits - totalPrice;
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${creditsBalance} кредитов.`,
  );
}
