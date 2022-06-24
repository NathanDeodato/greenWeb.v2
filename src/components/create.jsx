import React, {useState} from "react"

import { CreateBox, H1, InputBox, InputMiniBox, Input, ButtonC, Link, } from "../styles/create"

//

import Login from "./login"

//

export default function CreateGreen() {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")

    const [ password1, setPassword1 ] = useState("")
    const [ password2, setPassword2 ] = useState("")

    const [ tel, setTel ] = useState("")
    const [ age, setAge ] = useState("")

    const [ boxCreate, setBoxCreate ] = useState(true)
    const [ boxLogin, setBoxLogin ] = useState(false)

    function Create() {
        return(
            <CreateBox>
                <H1>Criar Conta</H1>
                <InputBox>
                    <InputMiniBox>
                        <Input 
                        value={name}
                        type="text" 
                        placeholder="USERNAME" 
                        onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                        value={email}
                        type="email" 
                        placeholder="E-MAIL" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputMiniBox>
                    <InputMiniBox>
                        <Input 
                        value={password1}
                        type="password" 
                        placeholder="PASSWORD" 
                        onChange={(e) => setPassword1(e.target.value)}
                        />
                        <Input 
                        value={password2}
                        type="password" 
                        placeholder="PASSWORD" 
                        onChange={(e) => setPassword2(e.target.value)}
                        />
                    </InputMiniBox>
                    <InputMiniBox>
                        <Input 
                        value={tel}
                        type="tel" 
                        placeholder="TEL" 
                        onChange={(e) => setTel(e.target.value)}
                        />
                        <Input 
                        value={age}
                        type="number" 
                        placeholder="AGE" 
                        onChange={(e) => setAge(e.target.value)}
                        />
                    </InputMiniBox>
                </InputBox>
                <ButtonC
                onClick={() => {setName(""), setEmail(""), 
                setPassword1(""), setPassword2(""), setTel("")
                setAge("")}}
                >
                    Criar
                </ButtonC>
                <Link
                onClick={() => {setBoxCreate(false), setBoxLogin(true)}}
                >
                Já tenho conta
                </Link>
            </CreateBox>
        )
    }

    return(
        <div>
            { boxCreate && <Create /> }
            { boxLogin  && <Login /> }
        </div>        
    )
}
