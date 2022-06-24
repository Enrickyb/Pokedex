import { useContext } from "react";
import * as C from "./style";
import { ApiContext } from "../../../context/ApiContext";
import Pagination from "./Pagination/index";

interface Props{
  onSetCharacter: any,//
  onSetCurrentPokemon: any,//
}

export default function Cards(props: Props) {
  const { pokeData } = useContext(ApiContext);
  const { onSetCharacter, onSetCurrentPokemon } = props;

  function onShowCards(key: number) {
  onSetCharacter();
  onSetCurrentPokemon(key);
  }
  function textVerify(text: string) {
    if (text.length > 15) {
      let newText = text.substring(0, 15) + "...";
      return newText;
    } else {
      return text;
    }
  }
  

  return (
    <div>
      <C.CardsContainer>
        {pokeData.map((poke: any, key: number) => (
          <C.Card
            key={key}
            onClick={() => {
              onShowCards(key);
            }}
          >
            <img src={poke.sprites.front_default} alt="Pokemon"></img>
            <p>
              {textVerify(poke.name)}
            </p>
          </C.Card>
        ))}
      </C.CardsContainer>
      <Pagination />
    </div>
  );
}
