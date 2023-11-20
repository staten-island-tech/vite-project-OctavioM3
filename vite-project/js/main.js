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
  if (DOMSelectors.ThemeSelector.value === "light") {
    document.body.classList.add("Light");
    document.body.classList.remove("Dark");
  } else {
    document.body.classList.add("Dark");
    document.body.classList.remove("Light");
  } 
  if (DOMSelectors.ThemeSelector.value === "none") {
    document.body.classList.remove("Dark");
    document.body.classList.remove("Light");
  }
  }
);
