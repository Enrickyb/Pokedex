import styled from "styled-components";




export const SkillBarsContainer = styled.div`
  display: flex;
  flex-direction: row;

  progress[value] {
    width: 596px;
    height: 22px;
    margin-bottom: 48px;
    appearance: none;
    margin-right: 10px;
    
    ::-webkit-progress-bar {
      background-color: white;
      border-radius: 5px;
      
    }
    ::-webkit-progress-value {
      background-color: #403d3d;
      border-radius:0 5px 5px 0;
      transition: ease .4s;
      
      
    }
    
  
    
  }
`;