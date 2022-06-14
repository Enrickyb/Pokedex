import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import * as C from "./style";
import ProgressBar from "./ProgressBar";
import { IoMdArrowBack } from "react-icons/io";


export default function Characteristics(props : any){

  const {onSetCharacter, currentPokemon} = props
  const {pokeData} = useContext(ApiContext);

  const currentPoke = pokeData[currentPokemon]
 
  const [hpValue, setHpValue] = useState<number>(0);
  const [atkValue, setAtkValue] = useState<number>(0);
  const [defValue, setDefValue] = useState<number>(0);
  const [spdValue, setSpdValue] = useState<number>(0);
  const [expValue, setExpValue] = useState<number>(0);
  
  
  useEffect(() => {
    function updateValues() {
      const stats = { 
        hp: currentPoke.stats[0].base_stat,
        atk: currentPoke.stats[1].base_stat,
        def: currentPoke.stats[2].base_stat,
        spd: currentPoke.stats[3].base_stat,
        exp: currentPoke.stats[4].base_stat,
      }  
      
      setHpValue(stats.hp);
      setAtkValue(stats.atk);
      setDefValue(stats.def);
      setSpdValue(stats.spd);
      setExpValue(stats.exp);
    }
    updateValues();
  }, [pokeData, currentPoke]);

  return (
    <div>
      
      <C.returnButton
        onClick={() => {
          onSetCharacter();
        }}
      >
        <IoMdArrowBack size={35}/>
      </C.returnButton>
      <C.CharacteristicsContainer>
        <C.pokemonContainer>
          <img
            src={pokeData[currentPokemon].sprites.front_default}
            alt="Pokemon"
          ></img>
          <C.pokemonName>
            {pokeData[currentPokemon].name[0].toUpperCase() +
              pokeData[currentPokemon].name.substring(1)}
          </C.pokemonName>
          <C.pokemonTypeContainer>
            {pokeData[currentPokemon].types.map((type : any, key : number) => (
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
              <p>HP</p>
              <ProgressBar value={hpValue} max={300}></ProgressBar>
            </div>
            <div>
              <p>ATK</p>
              <ProgressBar value={atkValue} max={300}></ProgressBar>
            </div>
            <div>
              <p>DEF</p>
              <ProgressBar value={defValue} max={300}></ProgressBar>
            </div>
            <div>
              <p>SPD</p>
              <ProgressBar value={spdValue} max={300}></ProgressBar>
            </div>
            <div>
              <p>EXP</p>
              <ProgressBar value={expValue} max={300}></ProgressBar>
            </div>
          </C.stats>
        </C.statsContainer>
      </C.CharacteristicsContainer>
    </div>
  );
}
