import styled from "styled-components";




export const SkillBarsContainer = styled.div`
  display: flex;
  flex-direction: row;

  progress[value] {
    width: 596px;
    appearance: none;
    ::-webkit-progress-bar {
      background-color: #403d3d;
    }
    ::-webkit-progress-value {
      background-color: #403d3d;
    }
  }
`;