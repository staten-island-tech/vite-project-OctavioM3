import "../css/style.css";
import { Menu } from "./Menu";
import { DOMSelectors } from "./Dom";
import { insertfullMenu, clearAll } from "./Insert";

console.log(Menu);

DOMSelectors.MenuButton.addEventListener("click", function (event) {
    event.preventDefault();
    clearAll();
    insertfullMenu();
});