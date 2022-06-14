import React, { useState } from "react";
import Cards from "./Cards";
import * as C from "./style";
import Characteristics from "./Characteristics";


export default function Main() {
  const [character, setCharacter] = useState<boolean>(false);
  const [currentPokemon, setCurrentPokemon] = useState<number>();

  function onSetCharacter() : void {
    if (character) setCharacter(false);
    else setCharacter(true);
  }
  function onSetCurrentPokemon(key : number): void {
    setCurrentPokemon(key);
  }

  return (
    <C.Main>
      {character ? (
        <Characteristics
          onSetCharacter={onSetCharacter}
          currentPokemon={currentPokemon}
        />
      ) : (
        <Cards
          onSetCharacter={onSetCharacter}
          onSetCurrentPokemon={onSetCurrentPokemon}
        />
      ) } 
    </C.Main>
  );
}
