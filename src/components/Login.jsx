import React from "react"
import { Link, useNavigate, useParams }  from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import "../styles/reset.css"
import { ThreeDots } from "react-loader-spinner"
import usuarioINFO from "../contexts/userINFO"
import imagem from "../images/Group8.png"

export default function Login(){

    const { userINFO, setUserINFO } = React.useContext(usuarioINFO);

    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false)
    const [loginINFO, setLoginINFO] = React.useState({  email: '',
                                                        password: ''})     
    function loginEnter(event){
        event.preventDefault();
        setLoading(true)
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const promise = axios.post(URL, {...loginINFO})
        promise.then( (response) => {setUserINFO(response.data)
                                     navigate('/hoje')} )
        promise.catch( (err) => {alert("Ocorreu um erro. Recarregue a página e tente novamente")
                                setLoading(false)} )
    }

    return(
        <LoginScreen>
            <img src={imagem} alt="" />
            <form onSubmit={loginEnter}>
                <input type="email"  value={loginINFO.email} 
                                     placeholder={'Email'} 
                                     onChange={ (e) => setLoginINFO({...loginINFO, email: e.target.value}) } />
                <input type="password"  value={loginINFO.password} 
                                        placeholder={'Senha'} 
                                        onChange={ (e) => setLoginINFO({...loginINFO, password: e.target.value}) } />
                                        
               <button type="submit">{loading ? <ThreeDots color="#fff" height={13}/>  : <>Entrar</>}</button>
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
    width: 100vw;
    height: 100vh;
    background-color:  #FFFFFF;
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
        display: flex;
        align-items: center;
        justify-content: center;
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