export default async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const body = await response.json();
  const characters = body.results;
  return characters;
}

export async function fetchMultipleCharacters(characterIds) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterIds}`
  );
  const body = await response.json();
  const characters = body;
  return characters;
}
