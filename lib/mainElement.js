import { createElement } from "./elements";
import createCharacterCard from "../components/character-card";

const characters = [
  {
    name: "Bepisian",
    location: "Bepis 9",
    appearance: "Pilot",
  },
  {
    name: "Glexo Slim Slom",
    location: "Nuptia 4",
    appearance: "Big Trouble in Little Sanchez",
  },
];

const characterCards = characters.map((character) =>
  createCharacterCard(character)
);

export function createMainElement() {
  const mainElement = createElement(
    "main",
    { className: "main" },
    characterCards

    // createCharacterCard({
    //   name: "Bepisian",
    //   location: "Bepis 9",
    //   appearance: "Pilot",
    // }),
    // createCharacterCard({
    //   name: "Glexo Slim Slom",
    //   location: "Nuptia 4",
    //   appearance: "Big Trouble in Little Sanchez",
    // }),
  );

  return mainElement;
}
