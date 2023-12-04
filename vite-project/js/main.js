import "../css/style.css";
import { DOMSelectors } from "./Dom";
import { insertfullMenu, clearAll, VegetarianMenu, CheapMenu, InStockMenu } from "./Insert";
import { Themes } from "./Themes";

DOMSelectors.MenuButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll()
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
});

DOMSelectors.ThemeSelector.addEventListener("change", function (event) {
  event.preventDefault();
  Themes();
});

/*
let buttons = document.querySelectorAll(".btns")
buttons.forEach((btn) => btn.addEventListener("click", function(){
  clearAll()
  if (buttons="#menubtn") {
    insertfullMenu()
  } else if (buttons="#instockbtn") {
    InStockMenu()
  } else if (buttons="#vegiebtn") {
    VegetarianMenu()
  } else if (buttons="#cheapbtn") {
    CheapMenu()
  }
}));
*/