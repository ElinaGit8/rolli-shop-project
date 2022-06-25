// Добавляем прослушку во всем окне

// Задаем функции аргумент - событие, которое будет отслеживаться
window.addEventListener("click", function (event) {
  // Объявляем переменную для счетчика
  let counter;

  // Проверяем клик строго по кнопкам Plus / Minus
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // От кнопки Plus находим родителя
    const counterWrapper = event.target.closest(".counter-wrapper");
    // От родителя находим data-counter
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем является ли элемент, по которому был сделан клик, кнопкой plus
  if (event.target.dataset.action === "plus") {
    // Изменяем число в счетчике и выводим его в поле, увеличивая на 1
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент, по которому был сделан клик, кнопкой minus
  if (event.target.dataset.action === "minus") {
    // Проверяем условие, чтобы к-во товаров было больше 1
    if (parseInt(counter.innerText) > 1) {
      // Изменяем число в счетчике и выводим его в поле, уменьшая на 1
      counter.innerText = --counter.innerText;
      // Проверим лежит ли minus, по которому будет совершаться клик в корзине,
      // в обертке cart-wrapper
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      // Удаляем товар из корзины
      event.target.closest(".cart-item").remove();
      // Отображение статуса корзины Пустая / Полная
      toggleCartStatus();
      // Пересчет общей стоимости в корзине
      calcCartPriceAndDelivery();
    }
  }

  // Проверяем клик на plus или minus внутри крорзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    // Пересчет общей стоимости в корзине
    calcCartPriceAndDelivery();
  }
});
