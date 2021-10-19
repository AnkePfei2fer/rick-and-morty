// import { createElement } from "./lib/elements";
import { createHeaderElement } from "./lib/headerElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import "./style.css";

function renderApp() {
  const appElement = document.body.querySelector("#app");

  // const headerElement = createElement("header", { className: "header" }, [
  //   createElement("h1", {}, "Rick and Morty"),
  // ]);
  const headerElement = createHeaderElement();
  const mainElement = createMainElement();
  const footerElement = createFooterElement();

  appElement.append(headerElement, mainElement, footerElement);
}
renderApp();
