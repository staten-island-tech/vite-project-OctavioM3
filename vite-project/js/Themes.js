import { DOMSelectors } from "./Dom";

function Themes() {
if (DOMSelectors.ThemeSelector.value === "light") {
    document.body.classList.add("Light");
    document.body.classList.remove("Dark", "Green");
  } else if (DOMSelectors.ThemeSelector.value === "dark") {
    document.body.classList.add("Dark");
    document.body.classList.remove("Light", "Green");
  } else if (DOMSelectors.ThemeSelector.value === "green") {
    document.body.classList.add("Green");
    document.body.classList.remove("Dark", "Light");
  } else {
    document.body.classList.remove("Dark", "Light", "Green");
  }
}

export { Themes }