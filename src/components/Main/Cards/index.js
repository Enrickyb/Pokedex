import React, { useContext } from "react";
import * as C from "./style";
import { ApiContext } from "../../../Context/ApiContext";

export default function Cards(props) {
  const [pokeData] = useContext(ApiContext);
  
  function onShowCards(key){
    props.onSetCharacter()
    props.onSetCurrentPokemon(key)
    console.log(pokeData)
  }
  return (
    <C.CardsContainer>
      {pokeData.map((poke, key) => (
        <C.Card key={key} onClick={()=>{onShowCards(key)}}>
          <img src={poke.sprites.front_default} alt="Pokemon"></img>

          <div>{poke.name[0].toUpperCase() + poke.name.substring(1)}</div>
        </C.Card>
      ))}
    </C.CardsContainer>
  );
}
