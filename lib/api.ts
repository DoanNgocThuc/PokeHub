
const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemon(name: string) {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon');
  return res.json();
}

export async function getPokemonChunk(limit: number, offset: number) {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon chunk");
  return res.json();
}

export async function getGeneration(genId: number) {
  console.log("Fetching generation data...");
  const res = await fetch(`https://pokeapi.co/api/v2/generation/${genId}`);
  if (!res.ok) throw new Error(`Failed to fetch generation ${genId}`);
  return res.json();
}

