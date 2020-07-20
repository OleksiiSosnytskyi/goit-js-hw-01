const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password = prompt('введите ваш пароль');
console.log(password);

if (password === null) {
  message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
