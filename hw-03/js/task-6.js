// =============== <<<--- HOME TASK #6 --->>>  ===============

// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800


const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];
console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800
console.log(calculateTotalPrice(products, "Сканер")); // 8100
console.log(calculateTotalPrice(products, "Захват")); // 2400

function calculateTotalPrice(arr, productName) {
  // console.table(arr);
  // console.log(productName);
  for (let obj of arr) {
    if (obj.name.toLowerCase() === productName.toLowerCase()) {
      return obj.price * obj.quantity;
    }
  }
}


