let credits = 23580;
const pricePerDroid = 3000;
const ordered = prompt("Скільки телевізорів ви бажаєте придбати?");
let totalPrice = pricePerDroid * ordered;
if (ordered === null) {
  console.log("Операція скасована!");
} else if (totalPrice <= credits) {
  credits = credits - totalPrice;
  console.log(
    `Ви купили ${ordered} телевізорів, на рахунку залишилось ${credits} кредитів.`
  );
} else {
  console.log("Недостатньо коштів на рахунку!");
}
