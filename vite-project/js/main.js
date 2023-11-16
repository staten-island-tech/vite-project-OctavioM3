import "../css/style.css";
import { Menu } from "./Menu";
import { DOMSelectors } from "./Dom";
import { insertfullMenu } from "./Insert";

console.log(Menu);

DOMSelectors.SeeFullMenuBtn.addEventListener("click", function (event) {
    event.preventDefault();
    insertfullMenu();
});