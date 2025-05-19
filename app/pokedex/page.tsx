import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function PokedexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Pokédex</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input placeholder="Search Pokémon..." className="border-black" />
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white">Search</Button>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="gen1">Gen 1</TabsTrigger>
            <TabsTrigger value="gen2">Gen 2</TabsTrigger>
            <TabsTrigger value="gen3">Gen 3</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <Link href={`/pokedex/${i + 1}`} key={i} className="block">
                  <Card className="border-2 border-black hover:shadow-lg transition-all hover:bg-gray-50 cursor-pointer h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Pokémon #{i + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center mb-2">
                        <div className="text-4xl">?</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Type: Unknown</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gen1" className="mt-0">
            <Card className="border-2 border-black p-8">
              <p className="text-center">Generation 1 Pokémon will be displayed here</p>
            </Card>
          </TabsContent>

          <TabsContent value="gen2" className="mt-0">
            <Card className="border-2 border-black p-8">
              <p className="text-center">Generation 2 Pokémon will be displayed here</p>
            </Card>
          </TabsContent>

          <TabsContent value="gen3" className="mt-0">
            <Card className="border-2 border-black p-8">
              <p className="text-center">Generation 3 Pokémon will be displayed here</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
