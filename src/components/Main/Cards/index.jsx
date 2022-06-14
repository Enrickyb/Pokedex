import React, { useContext } from "react";
import * as C from "./style";
import { ApiContext } from "../../../context/ApiContext";
import Pagination from "./Pagination/index";
export default function Cards(props) {
  const {pokeData} = useContext(ApiContext);
  
  function onShowCards(key){
    props.onSetCharacter()
    props.onSetCurrentPokemon(key)
    
  }
  function textVerify(text){
    if(text.length > 15){
    let newText = text.substring(0, 15)+'...'
    return newText} else{
      return text
    }
  }
  
  return (
    <div>
      <C.CardsContainer>
        {pokeData.map((poke, key) => (
          <C.Card key={key} onClick={()=>{onShowCards(key)}}>
            <img src={poke.sprites.front_default} alt="Pokemon"></img>
            <div>{textVerify(poke.name[0].toUpperCase() + poke.name.substring(1))}</div>
          </C.Card>
        ))}
      
      </C.CardsContainer>
      <Pagination/>
    </div>
  );
}