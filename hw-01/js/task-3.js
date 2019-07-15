// ============ HOME TASK #3 ============
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;



// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// message = prompt('Enter your password:')

// if (message === null) { 
//   message = 'Canceled by user!';  
// } else if (message === ADMIN_PASSWORD) {
//   console.log('Welcome!');
// } else message = 'Access denied, password is not valid!'
// alert(message);




const ADMIN_PASSWORD = 'jqueryismyjam';
const passwordEntry = prompt('Enter your password:')
let message;

if (passwordEntry === null) { 
  message = 'Canceled by user!';  
} else if (passwordEntry === ADMIN_PASSWORD) {
  message = 'Welcome!';
} else message = 'Access denied, password is not valid!'
alert(message);
