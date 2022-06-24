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
`;

export const Logo = styled.img`
  width: 50%;

  &:hover {
    cursor: pointer;
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
`;

export const H1 = styled.h1`
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8em;
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
`;
