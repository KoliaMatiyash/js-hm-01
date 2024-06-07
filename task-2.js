const total = 100;
const ordered = Number(prompt("Скільки товару бажаєте купити?"));
if (ordered <= total) {
  confirm("Замовлення оформлено");
} else {
  confirm("На складі недостатня кількість товару!");
}
