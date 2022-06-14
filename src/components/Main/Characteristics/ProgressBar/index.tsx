import React from "react";
import * as C from "./style";


export default function ProgressBar(props: any) {
  
  
    return (
    <C.SkillBarsContainer value={props.value}>
      <progress value={props.value} max='300'></progress>
      <span>{props.value}/300</span>
     
    </C.SkillBarsContainer>
  );
}

