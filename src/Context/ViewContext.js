import React, { createContext, useState, useEffect } from "react";

export const ViewContext = createContext();


export function ViewProvider(props){
    const [character, setCharacter] = useState(true);

    function onSetCharacter() {
      if(character) setCharacter(false)
      else setCharacter(true)
    }

   return(<ViewContext.Provider value={character}>{props.children}</ViewContext.Provider>)
}

