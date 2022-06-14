import React from "react";
import * as Styled from "./style";


export default function ProgressBar(props: any) {
  
  
    return (
    // <C.SkillBarsContainer value={props.value}>
    //   <progress value={props.value} max='300'></progress>
    //   
     
    // </C.SkillBarsContainer>
      
    <Styled.SkillBarsContainer >
      <Styled.SkillBar>
        <Styled.ProgressBar width={props.value}>
        <span>{props.value}/300</span>
        </Styled.ProgressBar>
      </Styled.SkillBar>
    </Styled.SkillBarsContainer>
    
  );
}

