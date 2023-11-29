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
buttons.forEach((btn) => btn.addEventListener("click", function(SeeMenu){
  clearAll(SeeMenu)
  let filter = btn.textContent
  if (btn == buttons[0]) {
    insertfullMenu()
  } else if (btn == buttons[4]) {
    InStockMenu()
  }
}));

Menu.filter((SeeMenu) => SeeMenu.includes(filter)).forEach((SeeMenu)=>insertfullMenu(SeeMenu));