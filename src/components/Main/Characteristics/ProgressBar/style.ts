import styled from "styled-components";

const SkillBarsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SkillBar = styled.div`
  width: 596px;
  height: 22px;
  margin-bottom: 48px;
  appearance: none;
  margin-right: 10px;
  margin-left: 30px;
  background-color: white;
  border-radius: 5px;
  
`;
const ProgressBar = styled.div<{ width: number }>`
  background-color: #403d3d;
  border-radius: 0 5px 5px 0;
  transition: ease 0.4s;
  color: #403d3d;
  width: ${props=>(props.width * 3) + 'px'};
  position: relative;
  span{
    position: absolute;
    right: 0;
    color: white;
    margin-right: 9px;
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
  }
`;

export { SkillBarsContainer, SkillBar, ProgressBar };
