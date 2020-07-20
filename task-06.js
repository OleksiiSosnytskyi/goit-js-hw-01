let total = 0;
let input;

do {
  input = prompt('Введите любое число');
  const inputNumber = Number(input);
  total = total + inputNumber;
} while (input !== null);

console.log('total', total);
