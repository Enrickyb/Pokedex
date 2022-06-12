import React, {useState} from 'react'
import Cards from './Cards'
import Pagination from './Pagination'
import * as C from './style'
import Characteristics from './Characteristics'
export default function Main() {
  const [character, setCharacter] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState()

  function onSetCharacter() {
    if (character) setCharacter(false);
    else setCharacter(true);

  }
  function onSetCurrentPokemon(key){
    setCurrentPokemon(key)
    
  }

  return (
    <C.Main>
      
      {character ? (
          <Characteristics onSetCharacter={onSetCharacter} currentPokemon={currentPokemon}/>
        ) : (
          <Cards onSetCharacter={onSetCharacter} onSetCurrentPokemon={onSetCurrentPokemon}/>
        )}
      
      <Pagination/>
    </C.Main>
  )
}
