"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPokemonChunk } from "@/lib/api";
import { getPokemon } from "@/lib/api";
import { typeColorMap } from "@/lib/utils/typeColors";
import { capitalize } from "@/lib/utils/formatInitalLetter";
import PokemonGrid from "@/components/pokemon-grid";

export default function PokedexPage({
  initialPokemon,
  generationMap,
}: {
  initialPokemon: any[];
  generationMap: {
    gen1: Set<string>;
    gen2: Set<string>;
    gen3: Set<string>;
  };
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const data = await getPokemon(searchTerm);
      setPokemonData(data);
    } catch (err) {
      setError("Pokémon not found.");
      setPokemonData(null);
    }
  };

  const [pokemonList, setPokemonList] = useState<any[]>(initialPokemon);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(initialPokemon.length);
  const limit = 20;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    setLoading(true);
    try {
      const chunk = await getPokemonChunk(limit, offset);

      const detailedData = await Promise.all(
        chunk.results.map((p: { name: string }) => getPokemon(p.name))
      );

      setPokemonList((prev) => [...prev, ...detailedData]);
      setOffset((prev) => prev + limit);
    } catch (error) {
      console.error("Failed to load more Pokémon:", error);
    }
    setLoading(false);
  }, [offset]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);
  }, [loadMore, loading]);

  type Props = {
    initialPokemon: any[];
    generationMap: {
      gen1: Set<string>;
      gen2: Set<string>;
      gen3: Set<string>;
    };
  };

  function filterByGeneration(pokemonList: any[], generationSet: Set<string>) {
    return pokemonList.filter((p) => generationSet.has(p.name));
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Pokédex</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search Pokémon..."
              className="border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSearch}
            className="bg-black hover:bg-gray-800 text-white"
          >
            Search
          </Button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {pokemonData && (
          <div className="w-fit mx-auto mb-8">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>{pokemonData.name.toUpperCase()}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={pokemonData.sprites.front_default}
                  alt={pokemonData.name}
                  className="w-32 h-32 mb-4"
                />
                <div className="flex gap-2 flex-wrap">
                  {pokemonData.types.map((t: any) => {
                    const typeName = t.type.name;
                    const bgColor = typeColorMap[typeName] || "bg-gray-300";
                    return (
                      <span
                        key={typeName}
                        className={`text-white px-2 py-1 rounded text-sm font-semibold ${bgColor}`}
                      >
                        {capitalize(typeName)}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="gen1">Gen 1</TabsTrigger>
            <TabsTrigger value="gen2">Gen 2</TabsTrigger>
            <TabsTrigger value="gen3">Gen 3</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <PokemonGrid pokemonList={pokemonList} />
            <div
              ref={loadMoreRef}
              className="h-10 mt-4 flex justify-center items-center"
            >
              {loading && <p>Loading more...</p>}
            </div>
          </TabsContent>

          <TabsContent value="gen1" className="mt-0">
            <PokemonGrid
              pokemonList={filterByGeneration(pokemonList, generationMap.gen1)}
            />
          </TabsContent>
          <TabsContent value="gen2" className="mt-0">
            <PokemonGrid
              pokemonList={filterByGeneration(pokemonList, generationMap.gen2)}
            />
          </TabsContent>
          <TabsContent value="gen3" className="mt-0">
            <PokemonGrid
              pokemonList={filterByGeneration(pokemonList, generationMap.gen3)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
