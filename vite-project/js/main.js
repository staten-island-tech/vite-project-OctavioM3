import "../css/style.css";
import { DOMSelectors } from "./Dom";
import { insertfullMenu, clearAll, VegetarianMenu, CheapMenu, InStockMenu } from "./Insert";
import { Themes } from "./Themes";
import { Menu } from "./Menu";

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
});

DOMSelectors.ThemeSelector.addEventListener("change", function (event) {
  event.preventDefault();
  Themes();
});

let buttons = document.querySelectorAll(".btns")
buttons.forEach((btn) => btn.addEventListener("click", function(){
  clearAll()
  if (btn.textContent = "Click to see Full Menu") {
    insertfullMenu()
  } else if (btn.textContent = "Click to see In Stock Menu") {
    InStockMenu()
  }
}));
