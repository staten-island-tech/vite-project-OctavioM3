import "../css/style.css";
import { Menu } from "./Menu";
import { DOMSelectors } from "./Dom";

console.log(Menu);

function seeMenu() {
    let input = DOMSelectors.MenuButton.value;
    DOMSelectors.CardBox.insertAdjacentElement(
        "beforeend",
        `<div id="CardBox"><h3> ${input} </h3></div>`
    );
}