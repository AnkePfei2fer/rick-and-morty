import { createElement } from "./elements";

export function createHeaderElement() {
  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {}, "Rick and Morty characters"),
  ]);

  return headerElement;
}
