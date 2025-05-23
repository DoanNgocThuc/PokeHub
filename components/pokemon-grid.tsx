import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { capitalize } from "@/lib/utils/formatInitalLetter";
import { typeColorMap } from "@/lib/utils/typeColors";

export default function PokemonGrid({ pokemonList }: { pokemonList: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemonList.map((p, i) => (
        <Link href={`/pokedex/${p.name}`} key={i} className="block">
          <Card className="border-2 border-black hover:shadow-lg transition-all hover:bg-gray-50 cursor-pointer h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg capitalize">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square rounded-md flex items-center justify-center mb-2">
                <img
                  src={p.sprites.front_default}
                  alt={p.name}
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <div className="flex justify-center flex-wrap gap-1">
                {p.types.map((t: any) => {
                  const typeName = t.type.name;
                  const bgColor = typeColorMap[typeName] || "bg-gray-300";
                  return (
                    <span
                      key={typeName}
                      className={`text-white text-xs px-2 py-1 rounded font-semibold ${bgColor}`}
                    >
                      {capitalize(typeName)}
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
