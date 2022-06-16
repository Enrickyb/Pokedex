import { createContext, useState, useEffect } from "react";
import { getPokes, getPokemon } from "../data/pokeList";

type pokeDataType = Array<{
  name: string;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  types: Array<{ type: { name: string } }>;
  sprites: { front_default: string };
}>;
type ApiContextType = {
  pokeData: pokeDataType;
  offSet: any;
  onSetOffset: any;
  limit: number;
  total: number;
};

export const ApiContext = createContext<ApiContextType>({} as ApiContextType);

export function ApiProvider(props: any) {
  //pagination
  const limit = 36;
  const total = 1120;
  const [offSet, setOffset] = useState<number>(0);
  //fetch
  const [pokeData, setPokeData] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`;

  useEffect(() => {
    async function fetchPokeList() {
      let res = await getPokes(url);
      await loadingPokeList(res.results);
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
  function onSetOffset(offset: number) {
    setOffset(offset);
  }

  return (
    <ApiContext.Provider
      value={{
        pokeData,
        offSet,
        onSetOffset,
        limit,
        total,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}
