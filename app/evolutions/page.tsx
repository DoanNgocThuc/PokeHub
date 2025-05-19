import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function EvolutionsPage() {
  const evolutionChains = [
    {
      id: "001",
      chain: [
        { name: "Bulbasaur", number: "001", level: "Base" },
        { name: "Ivysaur", number: "002", level: "Level 16" },
        { name: "Venusaur", number: "003", level: "Level 32" },
      ],
    },
    {
      id: "004",
      chain: [
        { name: "Charmander", number: "004", level: "Base" },
        { name: "Charmeleon", number: "005", level: "Level 16" },
        { name: "Charizard", number: "006", level: "Level 36" },
      ],
    },
    {
      id: "007",
      chain: [
        { name: "Squirtle", number: "007", level: "Base" },
        { name: "Wartortle", number: "008", level: "Level 16" },
        { name: "Blastoise", number: "009", level: "Level 36" },
      ],
    },
    {
      id: "025",
      chain: [
        { name: "Pichu", number: "172", level: "Base" },
        { name: "Pikachu", number: "025", level: "Happiness" },
        { name: "Raichu", number: "026", level: "Thunder Stone" },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Pokémon Evolutions</h1>
        <p className="text-xl mb-8">
          Explore how Pokémon evolve and transform into new species through various methods.
        </p>

        <div className="space-y-8">
          {evolutionChains.map((chain, index) => (
            <div key={chain.id}>
              <h2 className="text-2xl font-medium mb-4">{chain.chain[0].name} Evolution Line</h2>

              <Card className="border-2 border-black mb-8">
                <CardHeader>
                  <CardTitle>Evolution Chain #{chain.id}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    {chain.chain.map((pokemon, pokemonIndex) => (
                      <React.Fragment key={pokemonIndex}>
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-lg font-bold">#{pokemon.number}</span>
                          </div>
                          <Link href={`/pokedex/${pokemon.number}`} className="font-bold text-lg hover:underline">
                            {pokemon.name}
                          </Link>
                          <p className="text-sm text-gray-600">{pokemon.level}</p>
                        </div>

                        {pokemonIndex < chain.chain.length - 1 && (
                          <div className="flex items-center justify-center my-2 md:my-0">
                            <ChevronRight className="h-8 w-8 text-gray-400" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {index < evolutionChains.length - 1 && <Separator className="my-8 bg-gray-300" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
