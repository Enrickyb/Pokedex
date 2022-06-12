import React, { useContext, useState } from "react";
import { ApiContext } from "../../../Context/ApiContext";
import * as C from "./style";

export default function Characteristics(props) {
  const [pokeData] = useContext(ApiContext);
  const skills = ["HP", "ATK", "DEF", "SPD", "EXP"]
  const [hue, setHue] = useState()



  return (
    <div>
      <button
        onClick={() => {
          props.onSetCharacter();
        }}
      >
        {" "}
        voltar{" "}
      </button>
      <C.CharacteristicsContainer>
        <C.pokemonContainer>
          <img
            src={pokeData[props.currentPokemon].sprites.front_default}
            alt="Pokemon"
          ></img>
          <C.pokemonName>
            {pokeData[props.currentPokemon].name[0].toUpperCase() +
              pokeData[props.currentPokemon].name.substring(1)}
          </C.pokemonName>
          <C.pokemonTypeContainer>
            {pokeData[props.currentPokemon].types.map((type, key) => (
              <C.pokemonType key={key}>
                {type.type.name[0].toUpperCase() + type.type.name.substring(1)}
              </C.pokemonType>
            ))}
          </C.pokemonTypeContainer>
        </C.pokemonContainer>
        <C.statsContainer>
          <h1>Base Stats</h1>
          <C.stats>
            <div>
              
            </div>
            
           
               
            
          </C.stats>
        </C.statsContainer>
      </C.CharacteristicsContainer>
    </div>
  );
}
ProgressBar.protoTypes = {

}
