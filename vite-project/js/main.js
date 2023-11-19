import "../css/style.css";
import { Menu } from "./Menu";
import { DOMSelectors } from "./Dom";
import { insertfullMenu, clearAll, VegetarianMenu } from "./Insert";

console.log(Menu);

DOMSelectors.MenuButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
  insertfullMenu();
});

DOMSelectors.VegetarianButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
  VegetarianMenu();
});

DOMSelectors.ThemeSelector.addEventListener("change", function () {
  console.log("works");
});
