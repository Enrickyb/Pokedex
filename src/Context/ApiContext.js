import React, { createContext, useState, useEffect } from "react";
import { getPokes, getPokemon } from "../data/pokeList";
export const ApiContext = createContext();

export function ApiProvider(props) {
  //pagination
  const limit = 36;
  const total = 1120;
  const [offset, setOffset] = useState(0);
  //fetch
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    async function fetchPokeList() {
      let res = await getPokes(url);
      await loadingPokeList(res.results);
      setLoading(false);

    }

    fetchPokeList();
  }, [offset, url]);

  const loadingPokeList = async (data) => {
    let pokemonData = await Promise.all(
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
