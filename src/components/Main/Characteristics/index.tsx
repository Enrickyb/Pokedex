import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import * as C from "./style";
import ProgressBar from "./ProgressBar";
import { IoMdArrowBack } from "react-icons/io";


interface Props{
  onSetCharacter: any, // 
  currentPokemon: number
}

export default function Characteristics(props: Props){ 
  

  const {pokeData} = useContext(ApiContext)
  const currentPoke = pokeData[props.currentPokemon]
 
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
            {pokeData[props.currentPokemon].name}
          </C.pokemonName>
          <C.pokemonTypeContainer> 
            {pokeData[props.currentPokemon].types.map((type, key) => (
              <C.pokemonType key={key}>
                {type.type.name}
              </C.pokemonType>
            ))} 
          </C.pokemonTypeContainer>
        </C.pokemonContainer>
        <C.statsContainer>
          <h1>Base Stats</h1>
          <C.stats>
            <div>
              <p>HP</p>
              <ProgressBar value={hpValue}></ProgressBar>
            </div>
            <div>
              <p>ATK</p>
              <ProgressBar value={atkValue}></ProgressBar>
            </div>
            <div>
              <p>DEF</p>
              <ProgressBar value={defValue}></ProgressBar>
            </div>
            <div>
              <p>SPD</p>
              <ProgressBar value={spdValue}></ProgressBar>
            </div>
            <div>
              <p>EXP</p>
              <ProgressBar value={expValue}></ProgressBar>
            </div>
          </C.stats>
        </C.statsContainer>
      </C.CharacteristicsContainer>
    </div>
  );
}
