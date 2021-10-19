import { createElement } from "./lib/elements";
import "./style.css";

function renderApp() {
  const appElement = document.body.querySelector("#app");

  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {}, "Rick and Morty"),
  ]);

  const mainElement = createElement("main", { className: "main" }, [
    "in development...",
  ]);

  const footerElement = createElement("footer", { className: "footer" }, [
    "footer",
  ]);

  appElement.append(headerElement, mainElement, footerElement);
}
renderApp();
