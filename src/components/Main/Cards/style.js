import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 46px;
    column-gap: 36px;
    width: 80%;
    height: 70vh;
    margin: 73px auto;
    overflow-y: scroll;
    padding: 15px;
`
export const Card = styled.div`
    width: 163px;
    height: 137px;
    background-color: #403D3D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    color: white;
    transition: ease 0.2s;
    &:hover{
    transform: scale(1.1);
    background-color: rgb(80, 61, 61);
    cursor: pointer;
    }
`