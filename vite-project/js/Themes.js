import { DOMSelectors } from "./Dom";

function Themes() {
if (DOMSelectors.ThemeSelector.value === "light") {
    document.body.classList.add("Light");
    document.body.classList.remove("Dark");
  } else if (DOMSelectors.ThemeSelector.value === "dark") {
    document.body.classList.add("Dark");
    document.body.classList.remove("Light");
  } else {
    document.body.classList.remove("Dark");
    document.body.classList.remove("Light");
  }
}

export { Themes }