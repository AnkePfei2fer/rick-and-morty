export default async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const body = await response.json();
  const characters = body.results;
  return characters;
}

export async function fetchRandomCharacters(random) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${random}`
  );
  const body = await response.json();
  const characters = body;
  return characters;
}
