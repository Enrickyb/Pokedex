import styled from "styled-components";

export const pagination = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 272px;
  margin: auto;
  li {
    text-align: center;
  }

  li + li {
    margin-left: 8px;
  }
`;
export const paginationButtons = styled.button<{focusColor: string | null}>`
  width: 32px;
  height: 32px;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  border: ${props => '1px solid' + props.focusColor || 'none' };
  color: ${props =>  props.focusColor || 'black' };
`;
export const prevAndNextButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled{
    background-color: #6F6F6F;
  }
`