import { createElement } from "../lib/elements";
import styles from "./searchComponent.module.css";

export default function createSearchComponent() {
  const inputField = createElement("input", {
    type: "text",
    placeholder: "Search characters",
    className: styles.inputField,
  });

  const submitButton = createElement(
    "button",
    { type: "submit", className: styles.submitButton },
    ["Go!"]
  );

  const searchElement = createElement("form", { className: styles.search }, [
    inputField,
    submitButton,
  ]);
  return searchElement;
}
