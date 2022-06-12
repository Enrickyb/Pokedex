import React from "react";
import * as C from "./style";
export default function ProgressBar() {
  
  
    return (
    <C.SkillBarsContainer>
      <progress value={value} max='300'></progress>
    </C.SkillBarsContainer>
  );
}
ProgressBar.protoTypes = {
    value: PropTypes.number.isRequired
}
