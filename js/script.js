'use strict';
const books = document.querySelectorAll('.books'),
  book = document.querySelectorAll('.book'),
  adv = document.querySelector('.adv');

let body = document.querySelector('body');
  body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

let book2List = book[0].getElementsByTagName('li');
let book5List = book[5].getElementsByTagName('li');
let book6List = book[2].getElementsByTagName('li');
console.log(book6List);



  adv.remove();

  console.log(books);
  console.log(book);

  book[0].before(book[1]);
  book[5].after(book[2]);
  book[3].before(book[4]);

  book[4].querySelector('h2 a').innerText = "Книга 3. this и Прототипы Объектов";

  // Изменение порядка во 2 главе
  book2List[1].after(book2List[3]);
  book2List[2].after(book2List[6]);
  book2List[3].after(book2List[8]);
  book2List[9].after(book2List[5]);

  // Изменение порядка в 5 главе
  book5List[1].after(book5List[9]);
  book5List[5].after(book5List[3]);
  book5List[8].after(book5List[6]);

  // Добавление 8 главы
  let elemBook6List = document.createElement('li');
  var elemTextBook6List = document.createTextNode("Глава 8: За пределами ES6");
  elemBook6List.appendChild(elemTextBook6List);
  book6List[8].appendChild(elemBook6List);