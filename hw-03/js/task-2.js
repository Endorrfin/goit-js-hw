// =============== <<<--- HOME TASK #2 --->>>  ===============

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


const countProps = {
  mail: 'poly@mail.com', 
  isOnline: true, 
  score: 500,
};

// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

const entries = Object.entries(countProps);
console.table(entries);










