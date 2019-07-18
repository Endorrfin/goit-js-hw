// =============== <<<--- HOME TASK #3 --->>>  ===============

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux


const findBestEmployee = function(statistic){
  let max = 0;
  let name;

  const keys = Object.keys(statistic);
  for (const key of keys) {
    if (max < statistic[key]){
      max = statistic[key];
      name = key;
    }
  }

  return {
    name,
    tasksCompleted: max
  };
};



console.table(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence
console.table(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango
console.table(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux






//   const findBestEmployee = ({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })

// // lorence

// let max = 0;
// let name;

// const keys = Object.keys(findBestEmployee);
// console.table(keys);

// for (const key of keys){
//   console.log(key);
//   console.log(findBestEmployee[key]);

//   if(max < findBestEmployee[key]){
//     max = findBestEmployee[key];
//     name = key;
//   }
// }

// console.log('max: ', max);
// console.log('name: ', name);










