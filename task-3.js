const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введіть пароль");
if (message === null) {
  message = confirm("Операцію скасовано!");
} else if (message === ADMIN_PASSWORD) {
  message = confirm("Ласкаво просимо!");
} else if (message !== ADMIN_PASSWORD) {
  message = confirm("Доступ заборонено, невірний пароль!");
}
console.alert(message);
