import React, { createContext, useState, useEffect } from "react";
import { ApiContextType } from "../types/ApiContextTypes";
import { getPokes, getPokemon } from "../data/pokeList";

export const ApiContext = createContext<ApiContextType | null>(null);

export function ApiProvider(props: any) {
  //pagination
  const limit: number = 36;
  const total: number = 1120;
  const [offset, setOffset] = useState<number>(0);
  //fetch
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    async function fetchPokeList() {
      let res: any = await getPokes(url);
      await loadingPokeList(res.results);
      setLoading(false);
    }
    fetchPokeList();
  }, [url]);

  const loadingPokeList = async (data: Array<{ url: string }>) => {
    let pokemonData: any = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokeData(pokemonData);
  };

  return (
    <ApiContext.Provider
      value={{
        pokeData: pokeData,
        offSet: [offset, setOffset],
        LIMIT: [limit],
        Total: [total],
        load: [loading, setLoading],
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}
