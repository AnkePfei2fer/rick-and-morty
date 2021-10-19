// import { createElement } from "./lib/elements";
import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import createCharacterCard from "./components/character-card";
import { createFooterElement } from "./lib/footerElement";
import "./style.css";

function renderApp() {
  const appElement = document.body.querySelector("#app");

  const headerElement = createHeaderElement();
  const mainElement = createMainElement();
  const characterCardElement = createCharacterCard();
  const footerElement = createFooterElement();

  appElement.append(headerElement, mainElement, footerElement);
  mainElement.append(characterCardElement);
}

renderApp();
