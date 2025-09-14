import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { usePokemonData } from "@/hooks/usePokemonData";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();

  const { pokemonData, loading } = usePokemonData();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Carregando Pokémon...</p>
      </div>
    );
  }

  const pokemon = pokemonData.find((p) => p.id === parseInt(id || "0"));

  if (!pokemon) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-muted-foreground">Pokémon não encontrado</p>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
      </div>
    );
  }

  const VALID_TYPES = new Set([
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ]);

  const getTypeClass = (type: string) => {
    const t = type.toLowerCase();
    return VALID_TYPES.has(t) ? `type-${t}` : "type-normal";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
        </Button>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-between items-start mb-4">
              <CardTitle className="text-3xl font-bold capitalize">
                {pokemon.name}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleFavorite(pokemon)}
                className="shrink-0"
              >
                <Star
                  className={`h-5 w-5 ${
                    isFavorite(pokemon)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>
            <div className="text-lg text-muted-foreground font-mono">
              #{pokemon.id.toString().padStart(3, "0")}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-48 h-48 object-contain"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Information</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Height:</span>
                    <span className="font-mono">{pokemon.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-mono">{pokemon.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Experience:</span>
                    <span className="font-mono">{pokemon.baseExperience}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Types</h3>
                <div className="flex flex-wrap gap-2">
                  {pokemon.types.map((type) => (
                    <span
                      key={type}
                      className={`px-2 py-1 rounded text-xs text-white font-medium capitalize ${getTypeClass(
                        type
                      )}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PokemonDetail;
