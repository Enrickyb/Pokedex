import React from "react";
import * as Styled from "./style";

export default function ProgressBar(props: any) {
  return (
    <Styled.SkillBarsContainer>
      <Styled.SkillBar>
        <Styled.ProgressBar width={props.value} >
          <span>{props.value}/200</span>
        </Styled.ProgressBar>
      </Styled.SkillBar>
    </Styled.SkillBarsContainer>
  );
}
