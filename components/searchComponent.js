import { createElement } from "../lib/elements";
import styles from "./searchComponent.module.css";

export default function createSearchComponent(onSubmit) {
  const inputField = createElement("input", {
    type: "text",
    placeholder: "Search characters",
    className: styles.inputField,
  });

  const submitButton = createElement(
    "button",
    {
      type: "submit",
      className: styles.submitButton,
    },
    ["Go!"]
  );

  const searchElement = createElement(
    "form",
    {
      className: styles.search,
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(inputField.value);
      },
    },
    [inputField, submitButton]
  );
  return searchElement;
}
