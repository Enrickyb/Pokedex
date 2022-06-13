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
    margin-left: 30px;

    @media (max-width: 916px) {
      width: 500px;
    }
    @media (max-width: 744px) {
      width: 400px;
    }
    @media (max-width: 640px) {

      width: 300px;
    }
    @media (max-width: 506px) {
      width: 200px;
    }

    ::-webkit-progress-bar {
      background-color: white;
      border-radius: 5px;
    }
    ::-webkit-progress-value {
      background-color: #403d3d;
      border-radius: 0 5px 5px 0;
      transition: ease 0.4s;
    }
    span {
      
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
