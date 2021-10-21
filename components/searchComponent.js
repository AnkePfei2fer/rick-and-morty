import { createElement } from "../lib/elements";

export default function createSearchComponent() {
  const inputField = createElement("input", {
    type: "text",
    placeholder: "Search characters",
    className: "inputField",
  });

  const submitButton = createElement(
    "button",
    { type: "submit", className: "submitButton" },
    ["Go!"]
  );

  const searchElement = createElement("form", { className: "search" }, [
    inputField,
    submitButton,
  ]);
  return searchElement;
}
