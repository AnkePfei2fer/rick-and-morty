import { createElement } from "./elements.js";
import createSearchComponent from "../components/searchComponent";
import createCharacterCard from "../components/character-card";

// Declare function for main element containing the character cards
export function createMainElement(characters) {
  // const searchElement = createSearchComponent(handleSubmit);

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  // async function handleSubmit(searchQuery) {
  //   const response = await fetch(
  //     `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
  //   );
  //   const body = await response.json();
  //   const searchResults = body.results;
  //   console.log(searchResults);
  //   // return searchResults;

  //   const characterSearch = searchResults.map((searchResult) =>
  //     createCharacterCard(searchResult)
  //   );
  //   // document.body.removeChild(characterCards);
  //   document.body.querySelector("main").innerHTML = "";
  //   // document.body.querySelector("main").prepend(searchElement);
  //   document.body.querySelector("main").prepend(...characterSearch);
  // }
  const mainElement = createElement("main", { className: "main" }, [
    // searchElement,
    ...characterCards,
  ]);

  return mainElement;
}
