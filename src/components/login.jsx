import React, {useState} from "react"

//

import { LoginBox, H1, InputBox, Input, ButtonL, LinkBox, Link } from "../styles/login"

//

import CreateGreen from "./create"

//

export default function LoginGreen() {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const [ boxLogin, setBoxLogin ] = useState(true)
    const [ boxCreate, setBoxCreate ] = useState(false)

    function Login() {
        return(
            <LoginBox>
                <H1>Logar-se</H1>
                <InputBox>
                    <Input 
                    value={email}
                    type="email" 
                    placeholder="E-MAIL" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                    value={password}
                    type="password" 
                    placeholder="PASSWORD" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </InputBox>
                <ButtonL
                onClick={() => {if(true){setEmail(""), setPassword("")}}}
                >
                    Login
                </ButtonL>
                <LinkBox>
                    <Link>Esqueci a senha</Link>
                    <Link
                    onClick={() => {setBoxLogin(false), setBoxCreate(true)}}
                    >
                        Criar conta
                    </Link>
                </LinkBox>
            </LoginBox>
        )
    }

    return(
        <div>
            { boxLogin && <Login /> }
            { boxCreate && <CreateGreen /> }
        </div>
    )
}
