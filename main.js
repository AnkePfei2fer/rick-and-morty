import { createHeaderElement } from "./lib/headerElement";
import createSearchComponent from "./components/searchComponent";
import { createMainElement } from "./lib/mainElement";
import createCharacterCard from "./components/character-card";
import { createFooterElement } from "./lib/footerElement";
import { fetchRandomCharacters } from "./lib/fetchCharacters";
import fetchCharacters from "./lib/fetchCharacters";
import "./style.css";

// Declare function for rendering the app
async function renderApp() {
  const appElement = document.body.querySelector("#app");

  const headerElement = createHeaderElement();
  const searchElement = createSearchComponent(handleSubmit);
  async function handleSubmit(searchQuery) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    const body = await response.json();
    const searchResults = body.results;
    console.log(searchResults);
    // return searchResults;

    const characterSearch = searchResults.map((searchResult) =>
      createCharacterCard(searchResult)
    );
    // document.body.removeChild(characterCards);
    document.body.querySelector("main").innerHTML = "";
    // document.body.querySelector("main").prepend(searchElement);
    document.body.querySelector("main").prepend(...characterSearch);
  }

  // Fetch character data from Rick and Morty API (first page)
  // const characters = await fetchCharacters();

  // OR Fetch 20 random characters
  const characters = await fetchRandomCharacters([
    71, 287, 119, 342, 528, 599, 393, 204, 517, 27, 244, 7, 109, 541, 643, 658,
    294, 40, 154, 117,
  ]);

  const mainElement = createMainElement(characters);
  const footerElement = createFooterElement();

  appElement.append(headerElement, searchElement, mainElement, footerElement);
}

renderApp();
