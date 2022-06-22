import React from "react";

import "./index.css";

import { GreenStart, H1, FormsBoxs, ModeBox, P, Button } from "./style.js";

import {
  Header,
  IconBox,
  Logo,
  NavButtons,
  ButtonsBox,
  Login,
  Create
} from "./style.js";

import { Footer, NT } from "./style.js";

import { greenLogo, deodatont } from "./assets/index";

//

export default function GreenWeb() {
  return (
    <div className="GreenDiv">
      <GreeNav />
      <StarGreen />
      <GreenFooter />
    </div>
  );
}

//

function StarGreen() {
  return (
    <GreenStart>
      <H1>Acessar a plataforma</H1>
      <FormsBoxs>
        <ModeBox>
          <P>Faça login em sua conta.</P>
          <Button>Logar</Button>
        </ModeBox>
        <ModeBox>
          <P>Crie uma conta para acessar a plataforma.</P>
          <Button>Criar</Button>
        </ModeBox>
      </FormsBoxs>
    </GreenStart>
  );
}

//

function GreeNav() {
  return (
    <Header>
      <IconBox>
        <Logo src={greenLogo} />
      </IconBox>
      <NavButtons>
        <ButtonsBox>
          <Login>Logar-se</Login>
          <Create>Cadastrar-se</Create>
        </ButtonsBox>
      </NavButtons>
    </Header>
  );
}

//

function GreenFooter() {
  return (
    <Footer>
      <NT src={deodatont} />
    </Footer>
  );
}
