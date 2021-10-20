import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import "./style.css";

async function renderApp() {
  const appElement = document.body.querySelector("#app");

  const headerElement = createHeaderElement();

  const response = await fetch("https://rickandmortyapi.com/api/character");
  const body = await response.json();
  const characters = body.results;

  const mainElement = createMainElement(characters);
  const footerElement = createFooterElement();

  appElement.append(headerElement, mainElement, footerElement);
}

renderApp();
