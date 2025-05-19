import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function GamesPage() {
  const gameGenerations = [
    {
      title: "Generation I",
      description: "1996-1999",
      games: [
        { id: "red-blue", name: "Pokémon Red & Blue", platform: "Game Boy", year: "1996" },
        { id: "yellow", name: "Pokémon Yellow", platform: "Game Boy", year: "1998" },
      ],
    },
    {
      title: "Generation II",
      description: "1999-2002",
      games: [
        { id: "gold-silver", name: "Pokémon Gold & Silver", platform: "Game Boy Color", year: "1999" },
        { id: "crystal", name: "Pokémon Crystal", platform: "Game Boy Color", year: "2000" },
      ],
    },
    {
      title: "Generation III",
      description: "2002-2006",
      games: [
        { id: "ruby-sapphire", name: "Pokémon Ruby & Sapphire", platform: "Game Boy Advance", year: "2002" },
        { id: "firered-leafgreen", name: "Pokémon FireRed & LeafGreen", platform: "Game Boy Advance", year: "2004" },
        { id: "emerald", name: "Pokémon Emerald", platform: "Game Boy Advance", year: "2004" },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Pokémon Games</h1>

        <div className="flex justify-end mb-6">
          <Select>
            <SelectTrigger className="w-[180px] border-black">
              <SelectValue placeholder="Filter by console" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Consoles</SelectItem>
              <SelectItem value="gb">Game Boy</SelectItem>
              <SelectItem value="gbc">Game Boy Color</SelectItem>
              <SelectItem value="gba">Game Boy Advance</SelectItem>
              <SelectItem value="nds">Nintendo DS</SelectItem>
              <SelectItem value="3ds">Nintendo 3DS</SelectItem>
              <SelectItem value="switch">Nintendo Switch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-8">
          {gameGenerations.map((gen, index) => (
            <div key={index}>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-bold">{gen.title}</h2>
                <span className="text-gray-600">{gen.description}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {gen.games.map((game, gameIndex) => (
                  <Link href={`/games/${game.id}`} key={gameIndex} className="block">
                    <Card className="border-2 border-black hover:shadow-lg transition-all hover:bg-gray-50 cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle>{game.name}</CardTitle>
                        <CardDescription>
                          {game.platform} • {game.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
                          <p className="text-gray-500">Game Cover</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {index < gameGenerations.length - 1 && <Separator className="my-8 bg-gray-300" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
