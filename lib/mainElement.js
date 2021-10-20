import { createElement } from "./elements";
import createCharacterCard from "../components/character-card";

export function createMainElement(characters) {
  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    "main",
    { className: "main" },
    characterCards
  );

  return mainElement;
}
