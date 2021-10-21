import { createElement } from "./elements";

// Declare function for header element
export function createHeaderElement() {
  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {}, "Rick and Morty characters"),
  ]);

  return headerElement;
}
