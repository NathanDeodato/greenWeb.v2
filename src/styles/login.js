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
`

export const H1 = styled.h1`
    padding-top: 2%;
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
`
