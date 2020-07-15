let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let quantity = prompt('сколько дроидов вы хотите купить?');
if (quantity === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = quantity * pricePerDroid;
}

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  let creditsBalance = credits - totalPrice;
  console.log(
    `Вы купили ${quantity} дроидов, на счету осталось ${creditsBalance} кредитов.`,
  );
}
