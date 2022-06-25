// Шаблон для счетчика

// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

// Отслеживаем клик на кнопку btnMinus
btnMinus.addEventListener("click", function () {
// Проверяем условие, чтобы к-во товаров было больше 1, 
// чтобы можно было уменьшить со страницы, не заходя в корзину
  if (parseInt(counter.innerText) > 1) {
// Изменяем число в счетчике и выводим его в поле, уменьшая на 1
    counter.innerText = --counter.innerText;
  }
});

// Отслеживаем клик на кнопку btnPlus
btnPlus.addEventListener("click", function () {
// Изменяем число в счетчике и выводим его в поле, увеличивая на 1
  counter.innerText = ++counter.innerText;
});


