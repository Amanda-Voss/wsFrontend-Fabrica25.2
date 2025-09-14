import { useEffect, useState } from "react";
import { Pokemon } from "@/components/PokemonCard";

const POKEMON_STORAGE_KEY = "pokemonData";

export function usePokemonData() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem(POKEMON_STORAGE_KEY);

    if (storedData) {
      // se já tem no localStorage, só carrega
      setPokemonData(JSON.parse(storedData));
      setLoading(false);
    } else {
      // senão, busca na API e salva
      const fetchPokemon = async () => {
        try {
          const results: Pokemon[] = [];

          for (let id = 1; id <= 1025; id++) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();

            results.push({
              id: data.id,
              name: data.name,
              types: data.types.map((t: any) => t.type.name),
              image: data.sprites.other["official-artwork"].front_default,
              height: (data.height / 10).toFixed(1) + " m", // convertendo para metros
              weight: (data.weight / 10).toFixed(1) + " kg", // convertendo para kg
              baseExperience: data.base_experience,
            });
          }

          localStorage.setItem(POKEMON_STORAGE_KEY, JSON.stringify(results));
          setPokemonData(results);
        } catch (err) {
          console.error("Erro ao buscar Pokémon:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchPokemon();
    }
  }, []);

  return { pokemonData, loading };
}
