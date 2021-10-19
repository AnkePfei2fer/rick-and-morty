import { createElement } from "./elements";

export function createMainElement() {
  const mainElement = createElement("main", { className: "main" }, [
    createElement("div", {}, "in development..."),
  ]);

  return mainElement;
}
