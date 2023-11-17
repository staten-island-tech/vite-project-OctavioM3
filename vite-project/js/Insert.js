import { Menu } from "./Menu";
import { DOMSelectors } from "./Dom";

function insertfullMenu() {
  Menu.forEach((Meal) =>
    DOMSelectors.CardBox.insertAdjacentHTML(
      "beforeend",
      `<div class="MealCard"><h3> ${Meal.name} </h3><img src="${Meal.img}" alt="${Meal.name}" class="Cardimg"></div>`
    )
  );
}

function clearAll() {
  const MealCard = document.querySelectorAll(".MealCard");
  MealCard.forEach((item) => item.remove());
}

function VegetarianMenu() {
  const Vegetarian = Menu.filter((Meal) => Meal.vegetarian == true);
  Vegetarian.forEach((Meal) => 
  DOMSelectors.CardBox.insertAdjacentHTML(
    "beforeend",
    `<div class="MealCard"><h3> ${Meal.name} </h3><img src="${Meal.img}" alt="${Meal.name}" class="Cardimg"></div>`
  )
  );
}

export { insertfullMenu, clearAll, VegetarianMenu };

