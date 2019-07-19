// =============== <<<--- HOME TASK #4 --->>>  ===============

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму зарпплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330
// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

const countTotalSalary = function(sum) {
  let general = 0;

  const countTotalSalary = Object.values(sum);
  for(const values of countTotalSalary) {
    general +=values;
  }

  return general
}



console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400






