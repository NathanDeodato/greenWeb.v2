import styled from "styled-components"

export const CreateBox = styled.div`
    width: 55vw;
    height: 55vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: #00fa9a;
    border-radius: 20px;

    @media (max-width: 1025px) {
        width: 70vw;
        height: 50vh;
    }

    @media (max-width: 769px) {
        width: 75vw;
        
        border-radius: 15px;
    }

    @media (max-width: 426px) {
        width: 95vw;
        height: 45vh;
    }

    @media (max-width: 376px) {
        width: 98vw;
        height: 38vh;
    }

    @media (max-width: 320px) {
        width: 98vw;
        height: 36vh;
    }
`

export const H1 = styled.h1`
    padding-top: 2%;

    @media (max-width: 769px) {
        font-size: 1.6em;
    }

    @media (max-width: 426px) {
        font-size: 1.2em;
    }
`

export const InputBox = styled.div`
    width: 95%;
    height: 55%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const InputMiniBox = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    justify-content: space-around;
`

export const Input = styled.input`
    width: 45%;
    height: 100%;

    border: none;
    border-radius: 5px;
    outline: none;

    text-align: center;

    &:hover{
        cursor: pointer;

        background-color: #c0c0c0;
    }

    @media (max-width: 426px) {
        width: 45%;

        font-size: 0.7em;
    }

    @media (max-width: 376px) {
        font-size: 0.6em;
    }

    @media (max-width: 376px) {
        font-size: 0.55em;
    }
`

export const ButtonC = styled.button`
    width: 20%;
    height: 10%;

    background-color: #fff;
    border: none;
    border-radius: 5px;

    font-weight: bold;

    &:hover{
        cursor: pointer;

        background-color: #c0c0c0;
    }

    @media (max-width: 426px) {
        width: 24%;
        height: 12%;
    }
`

export const Link = styled.p`
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 426px) {
        font-size: 0.8em;
    }

    @media (max-width: 375px) {
        font-size: 0.6em;
    }
`
