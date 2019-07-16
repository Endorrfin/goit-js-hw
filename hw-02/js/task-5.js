// ============ HOME TASK #5 ============
// Напиши функцию formatString(string) принимающую строку в параметр string.
// 	• Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// 	• Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка
// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка
// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

// Алгоритм 
// 1. Посчитать длинну строки
// 2. Построить условие <= 40 && > 40
// 3. Когда строка < 40 символов = оригинальная строка. Когда строка > 40 символов = возвращает 40 символов + '...'

const formatString = function(string) {
  if(string.length >= 40) {
    return string.substring(0, 40) + '...';
  }
  return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));