// =============== <<<--- HOME TASK #1 --->>>  ===============

// Напиши скрипт, который, для объекта user, последовательно:
// 	• добавляет поле mood со значением 'happy'
// 	• заменяет значение hobby на 'javascript'
// 	• заменяет значение premium на false
// 	• выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };



const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


// 1. добавляет поле mood со значением 'happy'
user.mood = 'happy';
console.log(user.mood);


// 2. заменяет значение hobby на 'javascript'
user.hobby = 'javascript';
console.table(user);


// 3. заменяет значение premium на false
user.premium = false;
console.table(user);

// 4. выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
  // const entries = Object.entries(user);
  // console.table(entries);

for (const key in user) {
  console.table(`key: ${key}, value ${user[key]}`);
}

