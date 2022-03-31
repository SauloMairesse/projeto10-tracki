import React from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

import "../styles/reset.css"

export default function Login(){

    const {idSessao} = useParams()
    const [nameUser, setNameUser] = React.useState('')
    const [passwordUser, setPasswordUser] = React.useState('')


    let loginToPost = {}
    function myObjectToPost(){
        loginToPost.push = {email: "...",
                            password: "..."}
    }

    return(
        <LoginScreen>
            <img src="../images/Group8.png" alt="" />
            <form action="">
                <input type="text"  value={nameUser} 
                                    placeholder={'Email'} 
                                    onChange={ (e) => setNameUser(e.target.value) }/>
                <input type="text"  value={passwordUser} 
                                    placeholder={'Senha'} 
                                    onChange={ (e) => setPasswordUser(e.target.value) }/>
                <button> Entrar </button>
            </form>
            <Link to={`/cadastro`}> <span> Ainda não possui Cadastro ? Cadastre-se </span> </Link>
        </LoginScreen>
    )
}

const LoginScreen = styled.main`
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
        color: #FFFFFF;
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