import Image from "next/image"
import Link from "next/link"
import { PokemonLogo } from "@/components/pokemon-logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center py-12 md:py-24">
          <div className="mb-8 scale-150">
            <PokemonLogo />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Welcome to the PokéHub</h1>
          <p className="text-xl text-center max-w-2xl mb-12">
            Explore the vast world of Pokémon through our comprehensive guides, game information, and evolution charts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <Link href="/pokedex" className="block group">
              <Card className="border-2 border-black hover:shadow-lg transition-all h-full hover:bg-gray-50 cursor-pointer">
                <CardHeader>
                  <CardTitle>Pokédex</CardTitle>
                  <CardDescription>Discover information about all Pokémon species.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Pokédex"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/games" className="block group">
              <Card className="border-2 border-black hover:shadow-lg transition-all h-full hover:bg-gray-50 cursor-pointer">
                <CardHeader>
                  <CardTitle>Games</CardTitle>
                  <CardDescription>Explore all Pokémon games across different platforms.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Pokémon Games"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/evolutions" className="block group">
              <Card className="border-2 border-black hover:shadow-lg transition-all h-full hover:bg-gray-50 cursor-pointer">
                <CardHeader>
                  <CardTitle>Evolutions</CardTitle>
                  <CardDescription>Learn about Pokémon evolution chains and methods.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Pokémon Evolutions"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
