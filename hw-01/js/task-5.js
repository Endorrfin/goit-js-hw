// ============ HOME TASK #5 ============
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов





let china = 100;
let chilu = 250;
let avstralia = 170;
let india = 80;
let jamaica = 120;

let orderDeliveryPrice = prompt("Enter name of your country");
let message;

switch (orderDeliveryPrice.toLowerCase()) {
  case 'china':
  message = `Price for delivery in ${orderDeliveryPrice} will be cost ${china} credits.`;
  break;
  case 'chilu':
  message = `Price for delivery in ${orderDeliveryPrice} will be cost ${chilu} credits.`;
  break;
  case 'avstralia':
  message = `Price for delivery in ${orderDeliveryPrice} will be cost ${avstralia} credits.`;
  break;
  case 'india':
  message = `Price for delivery in ${orderDeliveryPrice} will be cost ${india} credits.`;
  break;
  case 'jamaica':
  message = `Price for delivery in ${orderDeliveryPrice} will be cost ${jamaica} credits.`;
  break;
  default:
  message = ('Delivery is not available in your country!')
}
alert (message);