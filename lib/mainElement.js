import { createElement } from "./elements";
import createCharacterCard from "../components/character-card";

const characters = [
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
    name: "Bepisian",
    status: "Alive",
    species: "Alien",
    lastKnownLocation: "Bepis 9",
    firstSeenIn: "Pilot",
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/146.jpeg",
    name: "Glexo Slim Slom",
    status: "Alive",
    species: "Alien",
    lastKnownLocation: "Nuptia 4",
    firstSeenIn: "Big Trouble in Little Sanchez",
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
