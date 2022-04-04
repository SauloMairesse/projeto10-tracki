import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import "../styles/reset.css"

export default function Cadastro(){

    const navigate = useNavigate()
    
    const [registerINFO, setRegisterINFO] = React.useState({ email: '',
                                                             name: '',
                                                             password: '',
                                                             image:''})
                                                             
    console.log(registerINFO)

    function registerUser(event){
        event.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const promise = axios.post(URL, {...registerINFO})
        promise.then( console.log(" deu certo"))
        navigate('/')
    }

    return(
        <RegisterHTML>
            <img src="../images/Group8.png" alt="" />
            <form>
                <input type="text" value={registerINFO.email}
                                    placeholder={'Email'} 
                                    onChange={ (e) => setRegisterINFO({...registerINFO, email: e.target.value}) }
                />
                <input type="text"  value={registerINFO.name}
                                    placeholder={'Nome'} 
                                    onChange={ (e) => setRegisterINFO({...registerINFO, name: e.target.value} ) }
                />
                <input type="password"  value={registerINFO.password} 
                                        placeholder={'Senha'} 
                                        onChange={ (e) => setRegisterINFO({...registerINFO, password: e.target.value}) }
                />
                <input type="text"  value={registerINFO.image}
                                    placeholder={'foto'} 
                                    onChange={ (e) => setRegisterINFO({...registerINFO, image: e.target.value}) }
                />
                <button onClick={registerUser}> Cadastrar </button>
            </form>
            <Link to={`/`}> <span> Já possui Cadastro ? Faça login! </span> </Link>
        </RegisterHTML>
    )
}

const RegisterHTML = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    /* background-color: blueviolet; */
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-color: aliceblue; */
        margin-bottom: 25px;
    }
    input{
        font-family: 'Lexend Deca', sans-serif;
        height: 45px;
        width: 303px;
        border-radius: 5px;
        margin-bottom: 7px;
        border: 1px solid #D4D4D4
    }
    button{
        font-family: 'Lexend Deca', sans-serif;
        height: 45px;
        width: 303px;
        border-radius: 5px;
        border: none;
        background: #52B6FF;
        /* color: #FFFFFF; */
    }
    span{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
    }
`;