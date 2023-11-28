import { Menu } from "./Menu";
import { DOMSelectors } from "./Dom";

function MenuCard(arr) {
  DOMSelectors.CardBox.insertAdjacentHTML(
    "beforeend",
    `<div class="MealCard"><h3> ${arr.name} </h3><img src="${arr.img}" alt="${arr.name}" class="Cardimg"><p class="Desc"> $ ${arr.price} </p></div>`
  );
}

function insertfullMenu() {
  Menu.forEach((arr) =>
  MenuCard(arr)
    );
}

function clearAll() {
  const MealCard = document.querySelectorAll(".MealCard");
  MealCard.forEach((card) => card.remove());
}

function VegetarianMenu() {
  const Vegetarian = Menu.filter((Meal) => Meal.vegetarian == true);
  Vegetarian.forEach((arr) =>
  MenuCard(arr)
  );
}

function CheapMenu() {
  const Cheap = Menu.filter((Meal) => Meal.price <= 10.00);
  Cheap.forEach((arr) => 
  MenuCard(arr)
  );
}

function InStockMenu() {
  const InStock = Menu.filter((Meal) => Meal.inStock == true);
  InStock.forEach((arr) => 
  MenuCard(arr)
  );
}

export { insertfullMenu, clearAll, VegetarianMenu, CheapMenu, InStockMenu };

