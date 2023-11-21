import "../css/style.css";
import { Menu } from "./Menu";
import { DOMSelectors } from "./Dom";
import { insertfullMenu, clearAll, VegetarianMenu, CheapMenu, InStockMenu } from "./Insert";
import { Themes } from "./Themes";

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

DOMSelectors.CheapButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
  CheapMenu();
});

DOMSelectors.InStockButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
  InStockMenu();
})

DOMSelectors.ThemeSelector.addEventListener("change", function (event) {
  event.preventDefault
  Themes();
});
