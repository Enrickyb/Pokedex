import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  row-gap: 46px;
  column-gap: 20px;
  width: 80%;
  height: 73vh;
  margin: 73px auto 38px;
  justify-items: center;
  align-items: center;
  overflow-y: scroll;
  padding: 15px;
  ::-webkit-scrollbar {
    background-color: #ffffff;
    width: 12px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d53b47;
    border-radius: 5px;
  }

  @media (max-width: 1503px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1275px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1008px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 760px) {
    grid-template-columns: auto auto;
    width: 100%;
    column-gap: 30px;
    margin: 20px auto 28px;
    height: 75vh;
  }
  @media (max-width: 320px) {
    grid-template-columns: auto;
    width: 100%;
    margin: 5px auto 5px;
    height: 60vh;
  }
 
  @media (max-height: 915px) {
    height: 70vh;
    margin: 20px auto 25px;
  }

  @media (max-height: 844px) {
    height: 75vh;
    margin: 20px auto 30px;
  }
  @media (max-height: 667px) {
    margin: 20px auto 25px;
  }
  @media (max-height: 660px) {
    margin: 20px auto 25px;
    height: 70vh;
  } 
`;
export const Card = styled.div`
  width: 163px;
  height: 137px;
  background-color: #403d3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: white;
  transition: ease 0.2s;
  img{
    width: 96px;

  }
  p::first-letter{
    text-transform: uppercase;
  }
  &:hover {
    transform: scale(1.1);
    background-color: rgb(80, 61, 61);
    cursor: pointer;
  }
`;
