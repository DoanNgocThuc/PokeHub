
const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemon(name: string) {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon');
  return res.json();
}

export async function getAllPokemon() {
  const res = await fetch(`${BASE_URL}/pokemon?limit=10000&offset=0`);
  if (!res.ok) throw new Error("Failed to fetch list of Pokémon");
  console.log({res});
  return res.json();
}