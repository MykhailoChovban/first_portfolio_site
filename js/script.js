let age = Number(prompt('Скільки вам років?', ''));

if (isNaN(age)) {
  alert('Введіть число');
}

if (age < 18) {
  alert('Доступ заборонено');

}
if (age >= 18) {
  alert('Привіт шалунішка');
}

if (age > 100) {
  alert('Не пизди');
}


