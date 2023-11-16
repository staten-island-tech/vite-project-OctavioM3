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
  let cards = document.querySelectorAll ("#MealCard");
    MenuButton.addEventListener("click", function (secondevent) {
      secondevent.target.parentElement.cards();
    });
});
}

export { insertfullMenu };
export { clearAll };
