import React, { useState } from "react";

import "./index.css";

import {
  Header,
  Home,
  IconBox,
  Logo,
} from "./style.js";

import { GreenStart, H1, FormsBoxs, ModeBox, P, Button } from "./style";

import { Footer, NT } from "./style.js";

import { home, greenLogo, deodatont } from "./assets/index";

//

import LoginGreen from "./components/login"
import CreateGreen from "./components/create"

//

export default function GreenWeb() {
  const [ boxStart, setBoxStart ] = useState(true)
  const [ boxLogin, setBoxLogin ] = useState(false)
  const [ boxCreate, setBoxCreate ] = useState(false)

  function GreeNav() {
    return (
      <Header>
        <Home 
        src={home} 
        onClick={() => {setBoxStart(true), setBoxLogin(false), setBoxCreate(false)}}
        />
        <IconBox>
          <Logo src={greenLogo} />
        </IconBox>
      </Header>
    );
  }

  function StarGreen() {
    return (
      <GreenStart>
        <H1>Acessar a plataforma</H1>
        <FormsBoxs>
          <ModeBox>
            <P>Faça login em sua conta.</P>
            <Button
            onClick={() => {setBoxStart(false), setBoxLogin(true), setBoxCreate(false)}}
            >
              Logar
            </Button>
          </ModeBox>
          <ModeBox>
            <P>Crie uma conta para acessar a plataforma.</P>
            <Button
            onClick={() => {setBoxStart(false), setBoxLogin(false), setBoxCreate(true)}}
            >
              Criar
            </Button>
          </ModeBox>
        </FormsBoxs>
      </GreenStart>
    );
  }

  function GreenFooter() {
    return (
      <Footer>
        <NT src={deodatont} />
      </Footer>
    );
  }
  
  return (
    <div className="GreenDiv">
      <GreeNav />
      { boxStart && <StarGreen />}
      { boxLogin && <LoginGreen />}
      { boxCreate && <CreateGreen />}
      <GreenFooter />
    </div>
  );
}
