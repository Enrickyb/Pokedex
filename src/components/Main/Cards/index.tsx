import React, { useContext } from "react";
import * as C from "./style";
import { ApiContext } from "../../../context/ApiContext";
import Pagination from "./Pagination/index";
import { ApiContextType } from "../../../types/ApiContextTypes";

export default function Cards(props: any) {
  const {pokeData} = useContext(ApiContext) as ApiContextType
  
  function onShowCards(key : Number){
    props.onSetCharacter()
    props.onSetCurrentPokemon(key)
    
  }
  function textVerify(text : String){
    if(text.length > 15){
    let newText = text.substring(0, 15)+'...'
    return newText} else{
      return text
    }
  }
  
  return (
    <div>
      <C.CardsContainer>
        {pokeData.map((poke: any, key: any) => (
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
