/*
*
*
* ОСНОВЫ JavaScript
*
*
*/


/*
Условные операторы: if, '?'
*/


/*Проверка стандарта*/
var question = prompt("Каково \"официальное\" название JavaScript?");

if (question == "EcmaScript") {
  alert("Верно!");
} else {
  alert("Не знаете \"EcmaScript\"\!");
}

/*Получить знак числа*/
var typeNumber = +prompt("Введите число");

if (typeNumber > 0) {
  alert('1');
} else if (typeNumber < 0) {
    alert('-1');
} else if (typeNumber == '0') {
    alert('0');
} else {
    alert('Не верное значение!');
}

/*Проверка логина*/
var loginCheck = prompt("Введите Ваш логин");

if (loginCheck == 'Admin') {

  if (passwordCheck == 'Черный Властелин') {
    alert('Добро пожаловать!');
  } else if (passwordCheck == null) {
    var passwordCheck = prompt("Введите Ваш пароль");
    alert('Вход отменен!');
  } else {
    alert('Пароль неверен!');
  }

} else if (loginCheck == null) {
  alert('Вход отменен!');
} else {
  alert('Я вас не знаю!');
}

/*Перепишите 'if' в '?'*/
var result = (a + b < 4) ? 'Мало' : 'Много';

/*Перепишите 'if..else' в '?'*/
var message (login == 'Вася') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте!' :
(login == '') ? 'Нет логина' :
'';


/*
Логические операторы
*/


/*Проверка if внутри диапазона*/
var age = +prompt('Введите число');

if (age >= 14 && age <= 90) {
  alert('Подходит!');
}

/*Проверка if вне диапазона*/

//#1
if ( !(age >= 14 && age <= 90) )

//#2
if (age < 14 || age > 90)


/*
Циклы while, for
*/

//Выведите чётные числа
for (var i = 2; i <= 10; i += 2) {
  console.log(i);
}

//Замените for на while
var i = 0;
while (i < 3) {
  console.log("номер " + i + "!");
  i++;
}

//Повторять цикл, пока ввод неверен
while (number <= 100 || number == null) {
  var number = +prompt('Введите число больше 100');
}

//Вывести простые числа
function findSimpleNumbers(a,b) {
  nextPrime:
  for (var i = a; i <= b; i++) {
    for (var j = a; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}

findSimpleNumbers(2, 10);


/*
Конструкция switch
*/

//Напишите "if", аналогичный "switch"
var browser;

if (browser == 'IE') {
  alert('О, да у вас IE!');
} else if (browser == 'Chrome' || browser == 'Firefox' ||
browser == 'Safari' || browser == 'Opera') {
  alert('Да, и эти браузеры мы поддерживаем');
} else {
   alert('Мы надеемся, что и в вашем браузере все ок!');
}

//Переписать if'ы в switch
var a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}

/*
Функции
*/

//Перепишите функцию, используя оператор '?' или '||'
//#1
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

//#2
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

//Функция min
function min(a, b) {
  return (a < b) ? a : b;
}

min (1, 3);

//Функция pow(x,n)
function pow(x, n) {
  return (n > 1) ? Math.pow (x, n) :
  alert ('Степень должна быть больше 1');
}

pow (7, 2);


/*
Рекурсия, стек
*/

//Вычислить сумму чисел до данного
//#1
function sumTo(n) {
  var result = 0;
  for (var i = 1; i <= n; i++) {
    result += i;
  }

  console.log(result);
}

sumTo(100);

//#2
function sumTo(n) {
  if (n == 1){
    return 1;
  } else {
    return n + sumTo(n - 1)
  }
}

sumTo(100);

//#3
function sumTo(n) {
  var result = (1 + n) / 2 * n;
}

console.log( sumTo(100) );

//Вычислить факториал
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial(5);

//Числа Фибоначчи
//#1
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log( fib(7) );

//#2
function fib(n) {
  var a = 1,
  b = 1;

  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log( fib(77) );


/*
*
*
* Структуры данных
*
*
*/

/*
Числа
*/
var a = +prompt('Введите 1-ое число');
var b = +prompt('Введите 2-ое число');

alert(a + b);

//Как получить дробную часть числа?
function getDecimal(num) {
  var result = num - ~~num;
  return result;
}

console.log( getDecimal(2,1215) );
