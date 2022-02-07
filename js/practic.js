// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(2, 5, 8));


// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// const result = a.concat(c, b);
// console.log(result);
// const bPart = b.splice(1);
// console.log(bPart);
// console.log(b);
// const result = a.concat(c, b, bPart[0]);
// console.log(result);

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];


//----------- LETS GO-----------------------------

// const sofi = 1989;
// console.log(sofi)

// let sofi;
// console.log(sofi);


// const sofiPro = confirm('Sofi good woman');
// const sofiPro = prompt('please call to us');
// console.log(typeof sofiPro);
// console.log(sofiPro);

// const x = 2;
// const y = 10;
// const z = 2;
// console.log('x > y :', x === y, 'this is result!');

// ❌ Плохо, выполняется приведение типов
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
// console.log();
// const sofiPro = '5';
// const sofiPro = "145.45px12";

// console.log(parseInt(sofiPro));
// console.log(parseFloat(sofiPro));
// console.log(Number(sofiPro));
// // console.log(sofiPro);
// console.log(sofiPro);
// console.log(0.1 + 0.2 === 0.3);
// console.log((0.1 * 100 + 0.2 * 100) / 100);
// console.log((0.1 * 0.3 * 100) / 100);
// console.log((0.1 * 0.2).toFixed(4))
// const sofiP = 12.435;
// ---------------------------------------------
// const sofiP = (30, 6, 100, 14);       // и почему тут выдает последнее? а не наибольшее или так нельзя ? из переменной вычислить?
// console.log(Math.floor(sofiP));    // 20   не поняла как появился  
// console.log(Math.ceil(sofiP));    // 20  (20) поскольку в условии 
// console.log(Math.round(sofiP));   // 20  несколько значений?
// console.log(Math.max(30, 6, 100, 14));  
// console.log(Math.min(30, 6, 100, 14));
// console.log(Math.pow(5, 3));      // возвести в куб недьзя? ( 5, 3, 5)
// ------------------------------------------
// const sofiP = 80;      // если вставить в скобки масфлор переменную  она не будет играть ни какой роли в вычислениях? рандому она не нужна?

// console.log((Math.random() * (10 - 1) + 1).toFixed(1));

// ---------------------------

// // ✅ Хорошо, приведение типов не выполняется

// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// let value = 7;
// value += 7;
// console.log(value);
// console.log('beautiful', sofiPro);
// alert('beautiful', sofiPro);        // как вывести строку и переменную в алерт?

// let year;
// year = 10;
// console.log(year);
// sofi = 100;
// let sofi;
// sofi = true;
// sofi = 50 + 50;
// console.log(typeof sofi);

// const family = "Sofi Pro " + "mama" + " Maya";
// console.log(family);
// console.log("5" + 45);

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ''
// console.log("Mango" && ""); // true && false -> ''
// console.log("Mango" && "Poly"); // true && true -> 'Poly'
// console.log("Poly" && "Mango"); // true && true -> 'Mango'
// start = 2;
// end = 10;
// number = 4;
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// function getSubscriptionPrice(type) {
//   let price;
// //   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//      break;
   
//    default:
//      message = "price 366"
//   }

// //   // Change code above this line
// //   return price;
// // }
// // console.log()

// // const value = 5;

// // if (true) {
// //   console.log("Block scope: ", value); // 5
// // }

// // console.log("Global scope: ", value);
// // const message = "Welcome to Bahamas!";
// // console.log(message.indexOf("Bahamas")); // 8
// // console.log(message.endsWith("!")); // -1
// // const jsFileName = "script.js, styles.css, about.css, portfolio.css";
// // const minifiedJsFileName = jsFileName.replaceAll("css", "sofi")
// // console.log(minifiedJsFileName);
// const productName = "Repair droid";
// const nameS = "booo"
// // // console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(2, 7)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// // console.log(productName.slice(11, productName.length)); // "droid"
// function getSubstring(sofi, sofiPro) {
//   const substring =  sofi.slice(0, sofiPro); // Change this line

//   return substring;

// }
// console.log(substring)

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Видим глобальную + локальную A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

  // Переменные blockB и blockC не найдены в доступных областях видимости.
  // Будет ошибка обращения к переменной.
  // console.log(blockB); // ReferenceError: blockB is not defined
  // console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Видим глобальную + внешнюю A + локальную B
//     // console.log(global); // global
//     // console.log(blockA); // block A
//     // console.log(blockB); // block B

//     // Переменная blockC не найдена в доступных областях видимости.
//     // Будет ошибка обращения к переменной.
//     // console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Видим глобальную + локальную C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Переменные blockA и blockB не найдены в доступных областях видимости.
//   // Будет ошибка обращения к переменной.
//   // console.log(blockA); // ReferenceError: blockA is not defined
//   // console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Видим только глобальную
// console.log(global); // global

// // Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
// // Будет ошибка обращения к переменной.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// function sayHi(name) {
//   let newName;
//   console.log("hello " + name)
// }
// sayHi('Sofi')
// sayHi('Uriy')
//  productName = "tarartam"
// console.log(productName.slice(2, 2))

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }
// function checkStorage(available, ordered) {
  // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } else {
//     return  "The order is accepted, our manager will contact you";
//   }


//   // Change code above this line
// }
// console.log (checkStorage(100, 50))
// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients[1]);
// clients[1] = "sofi"
// console.log(clients[1]);

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); 

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// for (let i = 0; i < family.length; i += 1) {
//   console.log(family[i]);
// }
// for (const members of family) {
//   console.log(members);
// }
// const family = ['mama', 'maya', 'sofi', 'tolik', 'alla', 'tania', 'dima'];
// const memberToFind = 'maya';
// let info;
// for (members of family) {
//   if (members === memberToFind) {
//     info = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//     info = "Клиента с таким именем нету в базе данных!"
// }
// console.log(info);

// const friends = ['sofi', 'karina', 'maza', 'alba'];
// const friendToFind = 'sofi';
// let msg = 'try later'
// for (friend of friends){
//   if (friend === friendToFind) {
//     msg = 'u find me'
//     break;
//   }
// }
// console.log(msg)
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i = numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue
//     break
//   }
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"
// const calcTotalPrice = function (items) {
//   console.log('items in func ', items);

//   let total = 0;

//   for (imem of items) {
//     total += imem;
//   }
//   return total;
// }
// const sum = calcTotalPrice([10, 30, 50])
// console.log(sum);
// const a = ["Mango", "Poly", "Ajax"];

// const humans = ['sofi', 'toma', 'maya','tolia', 'alla'];

// console.log(humans.slice())

// console.log(humans.unshift())
// console.log(humans.push('tolia', 'alla'))
// console.log(humans)
// const human = 'toma';
// const humanToFind = humans.includes(human);
// console.log(humanToFind)
// if (humanToFind) {
//   console.log(`${human} u are human`)
// }


// if (human === 'toma' || human === 'tolia') {
// console.log('it human');
// }


// const b = a;
// console.log(a)
// console.log(b)

// a.push('sofi')
// console.log(a)
// b.push("petr")
// console.log(b) 
// console.log(a)

// function getExtremeElements(array) {

  // Change code below this line
  
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   // const newArray = [firstElement, lastElement];
//   console.log(array);
//   return [array[0], array[array.length - 1]];
  
//   // newArray.push();
//   // return newArray;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   const words = message.split("delimeter");
//   // Change code above this line
//   // return words;
// }

// function calculateEngravingPrice(message, pricePerWord) {
// // let totalPrice;
  
//   const arr = message.split(' ');
//   const arrLength = arr.length;

//   const totalPrice = arr.length * pricePerWord;
//   console.log(message.split(' '))
//   console.log(totalPrice);
//   return totalPrice;
  
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)


// function slugify(title) {
//   // Change code below this line

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug)
//   // Change code above this line
// }slugify("Arrays for begginers")

// function calculateTotal(number) {
//  // Change code below this line
// let totalSum = 0;
// for (let i = 0; i <= number; i += 1) {
//   totalSum += i;
//   console.log(totalSum)
// }
// }
// calculateTotal(8)

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const number of order) {
//     console.log('number ', number)
//     total = total + number
//     console.log('sum ', total)
//     console.log('----------');
//   }
//   return total;
// }
// console.log(calculateTotalPrice([2, 8, 3, 4]))

// // Переменным объявленным через let не обязательно сразу присваивать значение.
// let age;

// // Если переменной объявленной как let изначально не присвоено значение,
// // она инициализируется специальным значением undefined (не определено).
// console.log(age); // undefined

// // console.log() это метод для вывода данных в консоль браузера,
// // более детально с ним познакомимся позже.

// // Если переменная объявлена как let, её значение можно перезаписать.
// age = 14;
// console.log(age); // 14

// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 0

// let cost ;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0
// let cost;
// const subscription = "pro";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// const base = 5;
// const pow = 2;

// const result = Math.pow(base, pow);
//  console.log(result)ё

// let brand = 'jkKJnnlK'
//     brand = brand[0] + brand.slice(2).toLocaleLowerCase()
// console.log(brand)

// const girls = friends;
// console.log(friends)
// friends[3] = 'alina';
// console.log(friends)
// friends[2] = '777';
// 
// friends[lastIndex] = 'varia'

// friends[1] = 'zina';
// console.table('girls ', girls) 

// const friends = ['sofi', 'kara', 'maza', 'alb', 'alina', 'maza'];
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= friends.length; i += 1) {
  // friends[i];
  // console.log(friends[i]);
// }

// const friends = ['sofi', 'kara', 'maza', 'alina', 'maza'];
// // console.log('friends ', friends);

// for (const friend of friends) {
//   // friend += 1
// // console.log('friend ', friend);
  
// }
// // console.log('friend ', friend);
// console.log('friends ', friends);


//  Посчитать сумму покупок
// const numb = [10, 7, 140, 93, 60, 120, 220]
// let total = 0;
// for (let i = 0; i < numb.length; i += 1) {
//   // console.log(i) 
//   // total = total + numb[i] 
//   total += numb[i]
//   console.log('elem :', numb[i])
// }

// console.log('total: ',total)
// 1.  перебрать массив

// 2. создать переменную total

// 3 каждый плюс к total

//------ зача стрелочная 

// // Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 20 and greater than 10
// // with '*'. It should return a new array with numbers and '*' instead of these numbers.

//------ вариант длинный
// const substitute = (array) => {
//   const newarray = [];
//   array.forEach((element) => {
//     if (element > 10 && element < 20) {
//       newarray.push("*");
//     } else {
//       newarray.push(element);
//     }
//   });
//   console.log(newarray);
// };

// substitute([58, 14, 48, 12, 31, 19, 10]);

//---------- короткий 
// const substitute = array => array.map(element => (element < 20 && element > 10 ? '*' : element));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);


// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// // Change code below this line
// for (const key of keys) {
//   if (apartment.hasOwnProperty(key)) {
//     values.push(apartment[key])
//   }
// }
// console.log(values)
// console.log(keys)


// ----------------вариант 1 как достать ключи из объекта и их значения
// function countProps(object) {

//   let propCount = 0;

//   for (const key of Object.keys(object)) {
//       propCount += 1;
//   }
//   return propCount;
// }

// ----------------------  вариант 2

// function countProps(object) {

//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

//==========================  разбираю итер по масиву доступ к инд и элем

// const card = [58, 14, 48, 12, 31, 19, 10];

// let total = 0;

// for (let i = 0; i < card.length; i += 1){
//   total += card[i];
//   console.log('elem ', card[i])
// }
// console.log('total ',total)
// console.log(card)



// -----
// console.log('------------------   for of    --------')


// const cards = [58, 14, 48, 12, 31, 19, 10];
// let total = 0;

// for (let value of cards) {
//   total += value;
// }
// console.log('total ',total)
// console.log(cards)


// console.log('--------------цикд фор оф-------------')

// const numbers = [58, 14, 41, 12, 31, 19, 100];
// let total = 0;

// for (const num of numbers) {
//   if (num % 2 !== 0) {
//     // console.log("not count ", num);
//   } else {
//     console.log(`if odd sum total ${num}`)
//     total += num
//   }
    
// }
//   console.log('total -',total)


// for (let num of numbers) {
//   // console.log(num)
//   if (num % 2 !== 0) {
//     console.log(`${num} - odd`)
//     total += num;
//     // console.log(num)
//   }
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

//   if (numbers[i] % 2 === 0) {
//     console.log('even')
//     total += numbers[i]
//   }
// }


  // console.log('odd')
// for of

// % 2 

// console.log('---------- цикл фор оф перебор  масcивa  ---------')

// const numbers = [58, 14, 41, 12, 31, 19, 100];
// let bigNumber = numbers[0];

// for (const num of numbers) {
//   if (num > bigNumber){
//     bigNumber = num
//   }
// }

// // for (const num of numbers) {
// //   if (num < smallNum) {
// //     smallNum = num;
// //   }
// // }
// console.log(bigNumber)


//  ===========добавить в элем масива разделитель ============
// const logins = ['sofi', 'kara', 'mama', 'alina', 'maza', 'maya'];
// let string = '';

// for (const log of logins) {
//   string += log + ', ';
// }
// string = string.slice(0, string.length - 2);
// ------------- или ------------------
// const string = logins.join(' | ');
// console.log(logins)
// console.log(string);


// ================  заменить лоуркейс на апперкейс елем с строке   ====

// const string = 'чТО пРОИСХОДИТ?';
// const letters = string.split('');
// let newString = '';
// for (const letter of letters) {
//   // if (letter === letter.toUpperCase()) {
//   //   newString += letter.toLowerCase();
//   // } else {
//   //   newString += letter.toUpperCase();
//   // }
//   // --------------------- or -----------
//   newString += letter === letter.toUpperCase()
//   ? letter.toLowerCase()
//   : letter.toUpperCase(); 
// }

// console.log(newString);

// ================================= SLUG ===============

// const title = 'Конструкция for...of объявляет цикл';
// const nrmlzTitle = title.toLowerCase();
// // console.log(nrmlzTitle);
// const words = nrmlzTitle.split(' ');
// // console.log(words);

// const slug = words.join('_');
// // console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('_');
// console.log(slug1);

// ---------- optimaze
// console.log(words);
// console.log(slug);
// console.log(slug1);

// const slugify = function (string) {

//   return  string.toLowerCase().split(' ').join('_');

// //   const nrmlzTitle = string.toLowerCase();

// // const words = nrmlzTitle.split(' ');

// // const slug = words.join('_');


//   // return slug1;
//   // return slug;
// }

// console.log(slugify('Who will be good dew Sofi'));
// console.log(slugify('Sofi Maybe it will be u?'));
// console.log(slugify('Yes dear  you'));

// ===================== total 2 arrays CONCAT ============
// const array1 = [5, 40, 10, 20];
// const array2 = [60, 30, 90];

// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//   total += array1[i];
  
// }
// for (let i = 0; i < array2.length; i += 1) {
//   total += array2[i];
// }

// --------------------- or -----
// const allArrEllems = array1.concat(array2, [60,45,70]);
// for (const elem of allArrEllems) {
//   total += elem;
// }
// // const total +=

// console.log(allArrEllems);
// console.log('total ',total);
// console.log(array1);
// console.log(array2);

// ========================== SPLICE ARR  destruct========

// const cards = [
//   'Card-1',
//   'Card-2',
//   'Card-3',
//   'Card-4',
//   'Card-5',
// ]
// console.table(cards);

// delete of index
// const cardToRemove = 'Card-3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1)
// console.log(index);
// console.table(cards);

//add of index
// const cardtoInsert = 'card-6';
// // cards.splice(1, 0, cardtoInsert);
// //uppdate of index
// const cardToUpdate = 'card-4';
// const index = cards.indexOf('Card-3');
// console.log(index);
// cards.splice(index, 1, 'hshshsh');
// // console.table(cards);
// console.table(cards.splice(index, 1, 'hshshsh'))

// console.log(cards);
// for (let i = 0; i < cards.length; i += 1) {
  
// }

// =========================

// const loginToFind = 'maya';
// const message = logins.includes(loginToFind)
//   ? `${loginToFind} логин совпадает`
//   : `${loginToFind} логин не совпадает`;
// console.log(message)

// const logins = ['sofi', 'kara', 'mama', 'alina', 'maza', 'maya'];
// const loginToFind = 'tol';
// let message = `${loginToFind} не совпадает`;

// // for (let i = 0; i < logins.length; i += 1) {
// //   const login = logins[i];

// //   if (login === loginToFind) {
// //     // console.log('Ypaaaaaa!! ravni')
// //     message = `found ${loginToFind}`;
// //     break;
// //   }
// // }

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = " логин совпадает";
//     break;
//   }
// }
// console.log(message);

// for (const log of logins) {
//   if (log === loginToFind) {
//     message = `${loginToFind} find! `;
//   } else {
//     message = 'sorry';
//   }
// }

// =============== функции и ретерн=================
// const add = function (a,b) {
//   const result = a / b;
//   return result;
// }
// const res2 = add(40,4)
// const res = add(20, 4);
// console.log(res,res2)

// const fn = function(value) {
//   if (value > 50) {
//     return "value biger than 50";
//   } 
//     return "value less than 50"
// }
// const res1 = fn(10)
// console.log(res1);
// const res2 = fn(400);
// console.log(res2);

// ======  перебор массива цен  и ретерн тотал ========
// const card = [58, 14, 41, 12, 31, 19, 100, 340]
// let total = 0;
// for (const value of card) {
//   total +=value
// }
// console.log('total ', total);

// const calcTotalPrice = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//     return total;
// }
// const res = calcTotalPrice([100, 300, 500]);
// console.log(`Общая сумма покупок ${res}`);
// console.log(calcTotalPrice([100, 300, 500]));
// console.log(calcTotalPrice([1800, 30, 50]));
// console.log(total); 

// ============= логирование айтемов из масссива чего либо
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }



// logItems(['sofi', 'kara', 'mama', 'alina', 'maza', 'maya']);
// logItems([100, 300, 500])
// logItems(['car', 'mac pro', 'helth', 'money']);



// ===========     найти имя в масиве и сравнить с именем в поиске
// ----- через return;
// const logins = ['sofi', 'kara', 'mama', 'alina', 'maza', 'maya'];

// const findLogin = function (allLogins, loginToFind) {

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `user ${loginToFind} found`;
//     }
//   }
//   return `user ${loginToFind} not found`;
// }
// console.log(findLogin(logins, 'ggjjkkj'))
// console.log(findLogin(logins, 'maza'));
// console.log(findLogin(logins,'mama'))

// ---------- тернарный-----

// const findLogin = function (allLogins, loginToFind) {
//   const message = allLogins.includes(loginToFind)
//     ? `user ${loginToFind} found`
//     : `user ${loginToFind} not found`
//   return message;
// }
// console.log(findLogin(logins, 'ggjjkkj'))
// console.log(findLogin(logins, 'maza'));
// console.log(findLogin(logins, 'mama'))

// ----------return

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//     ? `user ${loginToFind} found`
//     : `user ${loginToFind} not found`
// }
// console.log(findLogin(logins, 'ggjjkkj'))
// console.log(findLogin(logins, 'maza'));
// console.log(findLogin(logins, 'mama'))

// =============== найти самое маленькое число

// const numbers = [58, 14, 41, 12, 31, 19, 100, 340];
// let smallNum = numbers [0];
// for (const num of numbers) {
//   if (num < smallNum) {
    
//   }
// }
// --------------отрицательные числа в массиве не стоит сравнивать с 0
// const findSmNum = function (numbers) {
//   let smallNum = numbers[0];

//   for (const num of numbers) {
//     if (num < smallNum) {
//       smallNum = num;
//     }
//   }
//   return smallNum;
// }
// console.log( 'ПЕРВЫЙ РЕЗ',findSmNum([58, 14, 41, 12, 31, -10, 100, 340]));
// console.log( 'второй РЕЗ',findSmNum([58, 14, 41, -12, 31, -19, -100, 340]));

// -------------- положительные числа

// const findSmNum = function (numbers) {
//   let smallNum = 0;

//   for (const num of numbers) {
//     if (num > smallNum) {
//       smallNum = num;
//     }
//   }
//   return smallNum;
// }
// console.log('второй РЕЗУЛЬТАТ', findSmNum([58, 14, 41, 12, 31, 19, 100, 340]));

// ============= разбиение строки и перебор

// const string = "jAvaScrIpt";

// const letters = string.split('')
// console.log(letters)
// let invStr = '';
// // console.log(letters)

// for (const letter of letters) {
  
//   invStr += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invStr);

// const changeString = function (string) {
//   const letters = string.split('');
//   console.log(letters);
//   let invertStr = '';

//   for (const letter of letters) {
//     invertStr += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
//   }

//   return invertStr;
// }
// console.log(changeString('jnsdUGbk'));

// ==========     ...args        ====================

// const add = function (...args) {

//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(70, 50, 90, 45, 60, 20));
// // console.log(add(6, 9, 4, 0));
  
// const filterNumber = function (array, ...args) {
//   const uniqueElem = [];
//   for (const elem of array) {

//     if (args.includes(elem)) {
//       uniqueElem.push(elem);
//     }
//   }
//   return uniqueElem;
// }

// // ------------ совпадающие цифры из массаива в массиве в новый массив
// console.log(filterNumber([2, 4, 8, 10], 3, 5, 8, 2));
// console.log(filterNumber([100, 400, 600], 100, 40, 30, 600));




// ================ ОБЪЕКТЫ ==========================================================

// const playlist = {
//   name: 'my play list',
//   rating: 5,
//   tracks: ['track - 1', 'track - 2', 'track - 3'],
//   trackCount: 3,

//   changeName(newName) {
//     // console.log('this внутри changeName:', this)
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   }
// };

// playlist.updateRating(9);

// playlist.addTrack('track-10');

// playlist.addTrack('track-40');

// playlist.changeName('new playlist');

// console.log(playlist);

// playlist.getName();
// const a = { x: 5 };
// const b = a;
// a.hello = 300;
// b.hello = 400;
// console.log(b)
// const propertyName = 'tracks';
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist['rating']);

// //если в переменной

// console.log(playlist.propertyName);
// console.log(playlist[propertyName])



// const fn = function (myObject) {
//   return { a: 5 };
// }
// console.log(fn())

// ===============  перебор ключей объектов ============

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// const arr = [];
// for (const key of keys) {
//   // console.log(feedback[key])
//   totalFeedback += feedback[key];
// }
// console.log(feedback);
// console.log(totalFeedback);

// console.log(keys);


// ---------------- перебор значений объектов --------------

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;

// const values = Object.values(feedback);

// for (const value of values) {
//   totalFeedback += value;
// }
// console.log(totalFeedback);

// ----------------  array of objects ----------


// =============================== тест 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line


//   // Change code above this line
// }
// console.log(products);

// --------------- 
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.table(products);
// products[2].newprop = 100;        // по индексу елемента массива добавляем значение
// for (const item of products) {
//   console.log(item);             // в сложных типах полусает for of получает ссылку на объект
  
//   // console.log(products.item(6));
// }
// console.table(products);

// ----------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// console.table(products);

// const getAllProducts = function (allProd) {
//   const allValues = [];
//   for (const item of allProd) {
   
//     allValues.push(item.name);
//   }
//   return allValues;
// };

// console.log(getAllProducts(products));
// console.log(getAllProducts(products, 'Droid'));
// console.log(getAllProducts(products, 'hhj'));

// -----

//  Напиши функцию getAllPropValues(propName) которая принимает один параметр     propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   const allNames = [];
//   for (const prop of propName) {
//     allNames.push(prop.name)
//   }
//   return allNames;
// }

// console.log('new names of products ',getAllPropValues(products));

// -----------------
// const friends = [
//   { name: "Maya", price: 1300 },
//   { name: "Zina", price: 2700 },
//   { name: "Petya", price: 400 },
//   { name: "Gosha", price: 1200 },
// ];

// const getAllName = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     names.push(friend.name);
//     // console.log(friend.name)
//   }
//   // console.log(names);
//   return names;

// };
// console.log(getAllName(friends));
// console.log(getAllName(products))

// ------------------------------
// const humans = [

//  {name:`foreword`, pageCount: 14},        //  this is BOOK
//  {name:`boyWhoLived`, pageCount: 18},
//  {name:`vanishingGlass`, pageCount: 13},
//  {name:`lettersFromNoOne`, pageCount: 17},
//  {name:`afterword`, pageCount: 19}

// ];

// const humansToFind = function (allHumans) {
//   const humansNames = [];                   //this new array for result
//   for (const human of allHumans) {
//     humansNames.push(human.name);
//   }
//   return humansNames;
// }

// console.log(humansToFind(humans));

// -----------

// const friends = [
//   { name: "Maya", online: true },
//   { name: "Zina", online: false },
//   { name: "Petya", online: false},
//   { name: "Gosha", online: false },
//   { name: "Petr", online: true },
// ];
// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// }

// console.log(getOnlineFriends(friends));


// ------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const allValues = [];
// for(const name of propName) {
//   // if(name.name === products.name) {
//     allValues.push(name.name);
    
//   // }
// }return allValues;
// // return [];

//   // Change code above this line
// }
// console.log(getAllPropValues(name))


// ----
// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline:[],
//   }

//   for (const friend of allFriends) {
//     console.log(friend);
//     if (friend.online) {
//       friendsByStatus.online.push(friend)
//     }
//   }
//   return friendsByStatus;
// };
// console.log(getFriendsByOnlineStatus(friends));

// -----------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const allValues = [];
// for(const elem of products) {
//   if(Object.keys(elem).includes(propName)) {
//     allValues.push(elem[propName]);
//   }
// }
// return allValues;
//   // Change code above this line
// }
// console.log(getAllPropValues(name));
// console.log(getAllPropValues("quantity"));

// ---
// const x = {
//   a: 10,
//   b: 20,
//   c: 40,
//   d: 50,
// }
// console.log(Object.values(x).length)

// const card = {
//   items: [],
//   getItems() { },
//   add(product) { },
//   remove(productName){},
//   clear() { },
//   countTotalPrice() { },
//   increaseQuantity(productName) { },
//   decreaseQuantity(productName) { },
// };
// ===========
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// == Напиши функцию getAllPropValues(propName) которая принимает один параметр ====  propName - имя (ключ) свойства. 
//    Функция должна вернуть массив всех значений свойства с таким именем из //     каждого объекта в массиве products.Если в
// == объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// function getAllPropValues(propName) {
//   // Change code below this line
// const allValues = [];
// for(const elem of products) {
//   if(Object.keys(elem).includes(propName)) {
//     allValues.push(elem[propName]);
//   }
// }
// return allValues;
//   // Change code above this line
// }
// ------ Напиши функцию calculateTotalPrice(productName) которая принимает один --------- параметр productName - название товара. Функция должна вернуть общую --------- стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//  let totalPrice = 0;
//  for(const prod of products) {
//    if ( prod.name === productName) {
//      totalPrice = prod.price * prod.quantity;
//    }
//  }
//  return totalPrice;
// }

// console.log(calculateTotalPrice("Radar"))

// ======= деструктуризация / спред/ рест

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

// ======= 3/23
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// --- before

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ------- after
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + higtToday + highTomorrow);

// console.log(highTemperatures)

// ========= 3/25
// Мы получили прогноз погоды на два дня, с минимальными и максимальными     
// температурами, а также необязательными иконками.
// Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {today: {low:lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow: {low:lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },} = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// --- ex
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// ============= 3/29
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. 
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings};

// console.log(finalSettings);

// Значение свойства finalSettings.theme равно "light"
// Значение свойства finalSettings.public равно "false"
// Значение свойства finalSettings.withPassword равно "true"
// Значение свойства finalSettings.minNumberOfQuestions равно 10
// Значение свойства finalSettings.timePerQuestion равно 30
// При присваивании значения переменной finalSettings используется синтаксис ...

// ============ 3/30
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
// }


// const data = { text: "Take out the trash" };
// ;
// console.log(makeTask(data));
// Объявлена функция makeTask(data)
// Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
// Вызов makeTask({ category: "Homemade", priority: "Low", text: c }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ========= 3/41
// 

// 

// С ЭТИМ НУЖНО РАЗОБРАТЬСЯ]!

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
  
//       if (this.potions[i].name === potionName) {
//         console.log(i)
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {

//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   }
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))

// ====== CALLBACK====

// TRY WITH REPETA=

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };
// const fnB = function (number) {
  
//   console.log('это лог при вызове fnB',number);
// }
// fnA('fififi',fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// анономная функция встраивается как аргумент

// doMath(2, 3, function (a, b) {
//     return a * b;
//   }
// );

// doMath(5, 4, function (x, y) {
//   return x + y;
// });

// const buttonRef = document.querySelector(".js-button");

// const handleBtnClick = function () {
//   console.log('клик по кнопке' + Date.now());
// }

// buttonRef.addEventListener("click", handleBtnClick);



// window.navigator.geolocation.getCurrentPosition()

// ===4/4


// Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

// Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.

// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

//  -----задача
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {

//     if (!this.pizzas.includes(pizzaName)) {
      
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line


// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//==== 

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   // console.log(`Индекс ${i},значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// const filter = function (arr, callback) {
//   const newArr = [];

//   for (const elem of arr) {
//     console.log(elem)
//     const passed = callback(elem);
//     if (passed) {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// }

// const callback = function (value) {
//   return value >= 15;
// }

// const lessMatch = filter([5, 10, 15, 20, 25], function (value) {
//   return value <= 10;
// })
// console.log(lessMatch)
// console.log(filter([5, 10, 15, 20, 25], callback));

// const fruits = [
//   { name: 'apples', quant: 100, isFresh: true },
//   { name: 'orange', quant: 150, isFresh: false },
//   { name: 'pear', quant: 250, isFresh: true }
// ];

// const getFruitsandQuan = function (fruit) {
//   return fruit.quant >= 120;
// }
// const res = filter(fruits, getFruitsandQuan);

// console.log(res);

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} cook ${dish}`);
// }
// makeDish('petr', 'оливье');
// makeDish('petr', 'love');
// makeDish('petr', 'salat');

// makeDish('maya', 'hacelim');
// makeDish('maya', 'tea');
// makeDish('maya', 'hala');


// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} cook ${dish}`);
//   }
//   return makeDish;
// }
// const mango = makeSheff('mango');
// console.log(mango)
// mango('niamniam')
// const petr = makeSheff('pert');
// console.log(petr('kuni'));

// =====4\6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
//   // numbers.toEach(function (num, index) {
//   //   if (indexOf(num)) {
      
//   //   }
//   // })
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20))

// const add = (a, b) =>  a +b ;
// console.log(add(4, 5));

// const multy = (x, y, d) => x - y * d;

// console.log(multy(10, 2, 3));

// const add = (...rest) => {
//   console.log(rest);
// }
// add(60, 14, 68);

// const showThis = () => {
//   console.log('this is showThis: ', this);
// }
// showThis()

// const user = {
//   fullName: 'mango',
//   showName() {
//     console.log('this:', this),
//     console.log('this.fullname:', this.fullName);
    
//     const inner = () => {
//       console.log('this in iner:', this)
//     }
//     inner();
//   },
// }
// user.showName();

// const objA = {
//   x: 5,
//   showX() {
//     console.log(this.x)
//   }
// }
// showX()
// -------------------
// const numbers = [1, 3, 5, 2, 4];
// // // const greterThenTwo = numbers.filter(num => num > 2);
// // // console.log(greterThenTwo)
// // const sort = numbers.filter((a, b) => a - b);
// // console.log(sort);


// const res = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);
// console.log(res);
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

// ---------------
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ----

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(number => {

//   })

//   // Change code above this line
//   return filteredNumbers;
// }
// ==== REFACTORING
// const fruits = [
//   { name: 'apples', quant: 100, isFresh: true },
//   { name: 'orange', quant: 150, isFresh: false },
//   { name: 'pear', quant: 250, isFresh: true }
// ];

// const updateFruits = fruits.map((fruit) => {
//   return {
//     ...fruit,
//     quant: fruit.quant + fruit.quant * 0.1,
//   };
// });

// const updateFruits = fruits.map((fruit) =>({
//     ...fruit,
//     quant: fruit.quant + fruit.quant * 0.1,

// }));

// console.table(updateFruits);

// const fruitToUpdate = "cherry";

// const updateFruits = fruits.map(fruit => {
  
//   if (fruit.name === fruitToUpdate) {
//     return {
//       ...fruit,
//       name: fruit.name.push(fruitToUpdate),
//     }
//   }
// })
// console.table(updateFruits);

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   numbers.forEach((num) => {
//     if (num % 2 === 0) {
//       newArr.push(num + value) ;
//     }
//   });
//   return newArr;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book=> book.genres);
// console.log(genres)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(uniqueGenres)

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates.sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);

// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b)=> b.localeCompare(a));
// console.log(authorsInReversedOrder)


// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];
// console.table(students)
// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder)
// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);
// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name));
// console.log(inAlphabeticalOrder);

// const animal = {
//   legs: 4,
// };
// console.log(animal)
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// // console.log(animal.isPrototypeOf(dog)); // true

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(child.heritage)

// class User {
 
//   // Синтаксис объявления метода класса
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//     // console.log(this.name)
//     // console.log(User);
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// class Storage {
// constructor (items) {
//  this.items =items
// }
// getItems(){
//     return this.items;
// }    
// addItem(newItem){
//   this.items.push(newItem);
// }  
// removeItem(itemToRemove){
// this.items = this.items.filter(item => item !== itemToRemove)
// }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// // Представим что выше есть объявление класса User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmail =[];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email){
//     blacklistedEmail.push(email);
//   }
//   isBlacklisted(email){
//     if (blacklistedEmails.includes(email)){
//       return;
//     }
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
  
//   blacklistedEmail = [];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email){
//     this.blacklistedEmail.push(email);
//   }
//   isBlacklisted(email){
//     return this.blacklistedEmail.includes(email)
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3f51b5' },
// ];
// console.log(colorPickerOptions);

// const option = colorPickerOptions[0];
// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker-option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   console.log(buttonEl)
//   return buttonEl;
// })

// console.log(elements);
// colorPickerContainerEl.append(...elements);
// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {

//   const option = colorPickerOptions[i];
//   console.log(option);
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker-option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   console.log(buttonEl)
  
//   elements.push(buttonEl);
// }
// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3f51b5' },
// ];
// // console.log(colorPickerOptions);

// const colorPickerContainerEl = document.querySelector('.js-color-picker');


// const createColorPickerOptions = (option) => {
//   return option.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker-option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     console.log(buttonEl)
//     return buttonEl;
//   });
// };

// const elements = createColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />


// wrapperRef.style.display = 'flex';
// wrapperRef.style.cssText = `display:flex;`
// console.log(wrapperRef);

// const firstPRef = wrapperRef.querySelector('p');
// // console.log(firstPRef);

// const secondPref = wrapperRef.querySelector('#elem');
// // console.log(secondPref);

// const thirdPref = wrapperRef.querySelector('.js-first-elem')
// // console.log(thirdPref);

// const fourthPref = wrapperRef.querySelector('[title="Hello"]')
// // console.log(fourthPref);

// const pRefs = document.querySelectorAll('p')
// console.log(pRefs);
// pRefs.forEach(ref=>console.log(ref))

// const paragrafRef = document.querySelector('.wrapper > #elem')
// console.log(paragrafRef);
// paragrafRef.classList.add('blue', 'bg-pink');
// paragrafRef.classList.remove('bg-pink');
// // console.log(paragrafRef.classList.contains('blue'));
// console.log(paragrafRef.classList.toggle( 'blue'));
// console.log(paragrafRef.classList.toggle( 'bg-pink'));

// const wrapperRef = document.querySelector('.wrapper');
// const elem = document.querySelector('#elem');

// elem.style.backgroundColor = 'aqua';
// elem.style.border = '3px solid gray';
// const color = 'pink';
// elem.style.cssText = `background-color: ${color}`;

// const elem = document.querySelector('.text');
// console.log(elem.textContent);
// console.log(elem.tagName)
// const elems = document.querySelectorAll('.text');
// console.log(elems);
// elems.forEach(elem => {
//   const tag = elem.tagName.toLowerCase();
//   const text = elem.textContent;
//   // elem.textContent = `${text} ${tag}`;
  // elem.textContent += tag;
// })

// const listRef = document.querySelector('#elem');

// const liRefs = listRef.children;
// console.log(liRefs)

// const firstLiRef = listRef.firstElementChild;

// const lastLiRef = listRef.lastElementChild;

// const liTitle = firstLiRef.children;

// const liRefArr = [...liRefs];
// console.log(liRefArr);

// for (const li of liRefArr) {
//   li.textContent += '!!'
//   console.log(li)
// }

// const liMiddleRef = document.querySelector('#middle');
// console.log(liMiddleRef);
// liMiddleRef.previousElementSibling.textContent += '!!!!2';
// liMiddleRef.nextElementSibling.textContent +=' 3333'

// // console.log(listRef);
// // console.log(firstLiRef);
// // console.log(lastLiRef);
// console.log(liTitle);


// const middleRef = document.querySelector('#middle');

// middleRef.parentElement.style.backgroundColor = 'aqua';

// middleRef.parentElement.parentElement.style.backgroundColor = 'pink';

// const ul = middleRef.closest('ul');

// const buttons = document.querySelectorAll('button');
// // console.log(buttons)
// buttons.forEach(btn => {
//   // console.log(btn.disabled);
//   if (btn.disabled) {
//     btn.disabled = false;
//   }
//   console.log(btn.dataset);
//   if (btn.dataset.value) {
//     btn.textContent = btn.dataset.value;
//   }
//   if (btn.dataset.size) {
//     btn.style.width = btn.dataset.size + 'px';
//   }
// });

// const olRef = document.querySelector('ol');
// console.log(olRef);

// const newLiRef = document.createElement('li');
// // console.log(newLiRef);

// newLiRef.textContent = 'soft skils';

// olRef.append(newLiRef);
// olRef.prepend(newLiRef);

// const title = document.createElement('h4');

// title.textContent= 'plan:'
// // olRef.before(title)
// // olRef.after(title);

// console.log()

// const liRefs = olRef.children;
// const ulRef = document.querySelector('#stack');
// ulRef.append(...liRefs);

// olRef.remove()
// ==================== СОЗДАНИЕ ЕЛЕМЕНТОВ И ДОБАВЛЕНИЕ В ДОМ

// const cities = ['paris', 'prague', 'berlin'];
// const list = document.createElement('ul');



// const newArr= cities.map(city => {
//   const liRef = document.createElement('li');
//   liRef.textContent = city;
//   return liRef;
// })
// console.log(newArr);

// list.append(...newArr);
// document.body.prepend(list);

// -------------- ЕЩЕ ОДИH СПОСОБ ДОБАВЛЕНИЯ

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  }]

const listRef = document.querySelector('#users');

const markup = users.map(({ name, age, eyeColor }) =>
  `<li>
    <h2>${name}</h2>
    <p>age:${age}</p>
    <span>eye color:</span>
    <span style="background-color: blue"></span>
</li>`);

console.log(markup)
// console.log(listRef)
listRef.insertAdjacentHTML('beforeend', markup.join(''));

// console.log(listRef.innerHTML)