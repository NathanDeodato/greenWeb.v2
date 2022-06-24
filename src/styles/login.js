import styled from "styled-components"

export const LoginBox = styled.div`
    width: 40vw;
    height: 45vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: #00fa9a;
    border-radius: 20px;

    @media (max-width: 1025px) {
        width: 52vw;
        height: 40vh;
    }

    @media (max-width: 769px) {
        width: 60vw;
        height: 44vh;
        
        border-radius: 15px;
    }

    @media (max-width: 426px) {
        width: 80vw;
        height: 35vh;
    }

    @media (max-width: 376px) {
        width: 90vw;
    }

    @media (max-width: 320px) {
        width: 95vw;
        height: 33vh;
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
    width: 100%;
    height: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Input = styled.input`
    width: 55%;
    height: 30%;

    border: none;
    border-radius: 5px;
    outline: none;

    text-align: center;

    &:hover{
        cursor: pointer;

        background-color: #c0c0c0;
    }

    @media (max-width: 426px) {
        width: 70%;
        height: 35%;

        font-size: 0.7em;
    }
`

export const ButtonL = styled.button`
    width: 25%;
    height: 12%;

    background-color: #fff;
    border: none;
    border-radius: 5px;

    font-weight: bold;

    &:hover{
        cursor: pointer;

        background-color: #c0c0c0;
    }

    @media (max-width: 426px) {
        width: 30%;
        height: 14%;
    }
`

export const LinkBox = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: space-around;
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
