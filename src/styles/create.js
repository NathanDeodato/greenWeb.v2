import styled from "styled-components"

export const H1 = styled.h1`
    padding-top: 2%;
`

export const CreateBox = styled.div`
    width: 55vw;
    height: 55vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: #00fa9a;
    border-radius: 20px;
`

export const InputBox = styled.div`
    width: 80%;
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
`

export const Link = styled.p`
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`
