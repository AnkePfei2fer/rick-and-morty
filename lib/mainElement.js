import { createElement } from "./elements";
import createCharacterCard from "../components/character-card";

export function createMainElement() {
  const mainElement = createElement("main", { className: "main" }, [
    createCharacterCard({
      name: "Bepisian",
      location: "Bepis 9",
      appearance: "Pilot",
    }),
    createCharacterCard({
      name: "Glexo Slim Slom",
      location: "Nuptia 4",
      appearance: "Big Trouble in Little Sanchez",
    }),
  ]);

  return mainElement;
}
