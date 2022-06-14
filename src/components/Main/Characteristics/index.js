import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import * as C from "./style";
import ProgressBar from "./ProgressBar";
import { IoMdArrowBack } from "react-icons/io";


export default function Characteristics(props) {
  const {pokeData} = useContext(ApiContext);
  const [hpValue, setHpValue] = useState(0);
  const [atkValue, setAtkValue] = useState(0);
  const [defValue, setDefValue] = useState(0);
  const [spdValue, setSpdValue] = useState(0);
  const [expValue, setExpValue] = useState(0);

  useEffect(() => {
    function updateValues() {
      const hp = pokeData[props.currentPokemon].stats[0].base_stat;
      const atk = pokeData[props.currentPokemon].stats[1].base_stat;
      const def = pokeData[props.currentPokemon].stats[2].base_stat;
      const spd = pokeData[props.currentPokemon].stats[3].base_stat;
      const exp = pokeData[props.currentPokemon].stats[4].base_stat;

      setHpValue(hp);
      setAtkValue(atk);
      setDefValue(def);
      setSpdValue(spd);
      setExpValue(exp);
    }
    updateValues();
  }, [pokeData, props.currentPokemon]);

  return (
    <div>
      
      <C.returnButton
        onClick={() => {
          props.onSetCharacter();
        }}
      >
        <IoMdArrowBack size={35}/>
      </C.returnButton>
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
