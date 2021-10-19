import { createElement } from "./elements";

export function createFooterElement() {
  const footerElement = createElement("footer", { className: "footer" }, [
    "footer",
  ]);

  return footerElement;
}
