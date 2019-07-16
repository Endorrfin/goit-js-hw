// ============ HOME TASK #1 ============
// Используя методы массива, последовательно выполни указанные операции над массивом имен пользователей.
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// // Удалить первый элемент массива
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить последний элемент массива
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя хранящегося в переменной userToInsert,
// // перед пользователем хранящимся в переменной insertBefore
// const userToInsert = 'Kong';
// const insertBefore = 'Jay';
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]




const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// 1. Удалить первый элемент массива
console.log(users.shift());
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// 2. Удалить последний элемент массива
console.log(users.pop());
console.log(users); // ["Poly", "Ajax"]

// 3. Добавить в начало массива пользователя "Lux"
console.log(users.unshift('Lux'));
console.log(users); // ["Lux", "Poly", "Ajax"]

// 4. Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users.splice(3, 0, 'Jay', 'Kiwi'));
console.log(users); // ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// 5. Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
console.log(users.splice(users.indexOf(userToDelete),1));
console.log(users); // ["Lux", "Poly", "Jay", "Kiwi"]


// 6. Добавить в массив пользователя хранящегося в переменной userToInsert,
const userToInsert = 'Kong';
const insertBefore = 'Jay';
console.log(users.splice(users.indexOf(insertBefore), 0, userToInsert));
console.log(users); // ["Lux", "Poly", "Kong", "Jay", "Kiwi"]