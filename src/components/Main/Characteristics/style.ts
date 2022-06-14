import styled from "styled-components";

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex: row;
  color: white;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 25px;
  @media (max-width: 1390px) {
    flex-direction: column;
    height: 100%;
    gap: 50px;
  }
`;
export const returnButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  color: #d53b47;
  transition: ease 0.3s;
  &:hover {
    color: white;
  }
`;
export const pokemonContainer = styled.div`
  background-color: #403d3d;
  border-radius: 20px;
  width: 432px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 644px) {
    margin-top: 50px;
  }
  @media (max-width: 450px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
    margin: 70px auto 0;
    
  }

  img {
    min-width: 250px;
    margin-bottom: 42;
  }

`;
export const pokemonName = styled.h1`
  margin-bottom: 23px;
`;
export const pokemonTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
export const pokemonType = styled.p`
  background-color: #2b2a2c;
  border-radius: 15px;
  width: 251px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

export const statsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  h1 {
    margin-bottom: 80px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 20px;
    @media (max-width: 1216px) {
      margin-bottom: 40px;
  }
  }
`;
export const stats = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  div {
    display: flex;
    flex-direction: row;
    
    @media (max-width: 1368px) {
    
  }
    & > p {
      width: 26.8px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
      margin-left: 50px;
    }
  }
`;

///
