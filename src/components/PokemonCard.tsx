import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
  height: string;
  weight: string;
  baseExperience: number;
}

interface PokemonCardProps {
  pokemon: Pokemon;
  isFavorite: boolean;
  onToggleFavorite: (pokemon: Pokemon) => void;
}

const PokemonCard = ({ pokemon, isFavorite, onToggleFavorite }: PokemonCardProps) => {
  const navigate = useNavigate();
  const primaryType = pokemon.types[0];

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div 
      className="pokemon-card relative group cursor-pointer" 
      onClick={handleCardClick}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(pokemon);
        }}
        className={cn(
          "absolute top-3 right-3 z-10 p-1.5 rounded-full transition-all",
          isFavorite
            ? "bg-accent text-white shadow-glow"
            : "bg-white/80 text-muted-foreground hover:bg-accent hover:text-white"
        )}
      >
        <Star size={16} className={isFavorite ? "fill-current" : ""} />
      </button>

      <div className="text-center">
        <div className="mb-3">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-24 h-24 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm text-muted-foreground font-medium">
            #{pokemon.id.toString().padStart(3, '0')}
          </div>
          
          <h3 className="font-bold text-lg capitalize text-foreground">
            {pokemon.name}
          </h3>

          <div className="flex flex-wrap gap-1 justify-center">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={cn("pokemon-type-badge", `type-${type}`)}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;