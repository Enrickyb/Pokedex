import styled from "styled-components";

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex: row;
  color: white;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 64px;
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
`;
export const stats = styled.div`
  display: flex;
  flex-direction: column;
`;


///
