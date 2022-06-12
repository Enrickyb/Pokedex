import React, { createContext, useState, useEffect } from "react";
import { getPokes, getPokemon } from "../data/pokeList";
export const ApiContext = createContext();

export function ApiProvider(props) {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=36");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");


  useEffect(() => {
    
    async function fetchPokeList() {
      
      let res = await getPokes(url);
      setNextUrl(res.next);
      setPrevUrl(res.previous);
      await loadingPokeList(res.results);
      
      
    }
 
    fetchPokeList();
    
  }, [url]);

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
    <ApiContext.Provider value={[pokeData, url, nextUrl, prevUrl, setNextUrl, setPrevUrl]}>{props.children}</ApiContext.Provider>
  );
}
