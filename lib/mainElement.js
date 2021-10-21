import { createElement } from "./elements.js";
import createCharacterCard from "../components/character-card";

// Declare function for main element containing the character cards
export function createMainElement(characters) {
  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement("main", { className: "main" }, [
    ...characterCards,
  ]);

  return mainElement;
}
