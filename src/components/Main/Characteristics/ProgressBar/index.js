import React, { useContext } from "react";
import * as C from "./style";
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
 
  
    return (
    <C.SkillBarsContainer value={props.value}>
      <progress value={props.value} max='300'></progress>
      <span>{props.value}/300</span>
     
    </C.SkillBarsContainer>
  );
}
ProgressBar.propTypes= {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
}
