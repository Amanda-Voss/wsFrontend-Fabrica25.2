import { useState, useEffect } from "react";
import { Pokemon } from "@/components/PokemonCard";

const FAVORITES_KEY = "pokemon-favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }, []);

  const saveFavorites = (newFavorites: Pokemon[]) => {
    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  const toggleFavorite = (pokemon: Pokemon) => {
    const isFavorite = favorites.some(fav => fav.id === pokemon.id);
    
    if (isFavorite) {
      const newFavorites = favorites.filter(fav => fav.id !== pokemon.id);
      saveFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, pokemon];
      saveFavorites(newFavorites);
    }
  };

  const isFavorite = (pokemon: Pokemon) => {
    return favorites.some(fav => fav.id === pokemon.id);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};