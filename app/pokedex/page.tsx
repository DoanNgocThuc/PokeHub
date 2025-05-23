import { getPokemonChunk, getPokemon, getGeneration } from "@/lib/api";
import PokedexPage from "./pokedexPage";

const [gen1Data, gen2Data, gen3Data] = await Promise.all([
  getGeneration(1),
  getGeneration(2),
  getGeneration(3),
]);

const generationMap = {
  gen1: new Set<string>(gen1Data.pokemon_species.map((p: { name: string }) => p.name)),
  gen2: new Set<string>(gen2Data.pokemon_species.map((p: { name: string }) => p.name)),
  gen3: new Set<string>(gen3Data.pokemon_species.map((p: { name: string }) => p.name)),
};


export default async function PokedexServerPage() {
  const chunk = await getPokemonChunk(20, 0);

  const fullDetails = await Promise.all(
    chunk.results.map((p: { name: string }) => getPokemon(p.name))
  );

  return <PokedexPage initialPokemon={fullDetails} generationMap={generationMap}/>;
}
