// Fetch character data from first page of Rick and Morty API
export default async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const body = await response.json();
  const characters = body.results;
  return characters;
}

// Fetch 20 selected characters from Rick and Morty API
export async function fetchMultipleCharacters(characterIds) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterIds}`
  );
  const body = await response.json();
  const characters = body;
  return characters;
}
