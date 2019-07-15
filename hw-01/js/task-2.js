// ============ HOME TASK #2 ============
// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
// Сравни эти значения и по результатам выведи:
// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered.
// const total = 100;
// const ordered = 50;


const total = 100;
const ordered = 50;
// let consumerOrdered = prompt('How many goods you need?');
let consumerOrdered = 99;


if(consumerOrdered <= total) {
  console.log('The order is made, our manager will contact you!');
} else {
  console.log('Not enough goods in stock');
}

