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
  console.table(countTotalSalary);
  for(const values of countTotalSalary) {
    general +=values;
  }

  console.table('general :', general);
}



console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
    Bary: 80,
    Ivod: 70,
    Royi: 120,
  }),
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400



// const employeesSalary = {
//   mango: 100,
//   poly: 150,
//   alfred: 80,
//   Bary: 80,
//   Ivod: 70,
//   Royi: 120,
// }

// let total = 0;
// const countTotalSalary = Object.values(employeesSalary);
// console.table(countTotalSalary);
// for (const value of countTotalSalary) {
//   total +=value;
// }
// console.log('total :', total);



// const findBestEmployee = function(statistic){
//   let max = 0;
//   let name;

//   const keys = Object.keys(statistic);
//   for (const key of keys) {
//     if (max < statistic[key]){
//       max = statistic[key];
//       name = key;
//     }
//   }

//   return {
//     name,
//     tasksCompleted: max
//   };
// };





