import styled from "styled-components";

// Style Nav

export const Header = styled.header`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = styled.img`
  width: 2.5vw;

  position: absolute;
  left: 3%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1025px) {
    width: 3vw;
  }

  @media (max-width: 426px) {
    width: 5vw;
  }

  @media (max-width: 320px) {
    width: 6vw;
  }
`

export const IconBox = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 769px) {
    width: 40%;
  }
`;

export const Logo = styled.img`
  width: 50%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1025px) {
    width: 65%;
  }

  @media (max-width: 426px) {
    width: 90%;
  }

  @media (max-width: 376px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 120%;
  }
`;

// StartGreen

export const GreenStart = styled.div`
  width: 45vw;
  height: 45vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: #00fa9a;
  border-radius: 20px;

  @media (max-width: 1025px) {
    width: 55vw;
    height: 40vh;
  }

  @media (max-width: 769px) {
    border-radius: 15px;
  }

  @media (max-width: 426px) {
    width: 85vw;
    height: 35vh;
  }

  @media (max-width: 376px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 95vw;
    height: 33vh;
  }
`;

export const H1 = styled.h1`
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8em;

  @media (max-width: 1025px) {
    font-size: 1.6em;
  }

  @media (max-width: 769px) {
    font-size: 1.4em;
  }

  @media (max-width: 426px) {
    font-size: 1.2em;
  }
`;

export const FormsBoxs = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: space-around;
`;

export const ModeBox = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const P = styled.p`
  width: 80%;
  height: 20%;

  font-size: 1.5em;

  @media (max-width: 1025px) {
    font-size: 1.3em;
  }

  @media (max-width: 769px) {
    font-size: 1em;
  }

  @media (max-width: 426px) {
    font-size: 0.85em;
  }
`;

export const Button = styled.button`
  width: 40%;
  height: 18%;

  background-color: #fff;
  border: none;
  border-radius: 5px;

  font-size: 1em;
  font-weight: bold;

  &:hover {
    cursor: pointer;

    width: 43%;

    background-color: #c0c0c0;
  }

  @media (max-width: 769px) {
    font-size: 0.75em;
  }

  @media (max-width: 426px) {
    width: 45%;
    height: 18%;
  }
`;

// Styled Footer

export const Footer = styled.footer`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00fa9a;
`;

export const NT = styled.img`
  width: 17%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1025px) {
    width: 23%;
  }

  @media (max-width: 769px) {
    width: 25%;
  }

  @media (max-width: 426px) {
    width: 50%;
  }

  @media (max-width: 426px) {
    width: 55%;
  }
`;
