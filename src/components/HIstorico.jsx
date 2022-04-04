import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import usuarioINFO from "../contexts/userINFO"
import React from "react";

export default function Historico(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    return(
        <HistoricoHTML>
            <Header  userImg={userINFO.image}/>
            <div className="subHeader">
                <h1>Historico</h1>
            </div>
            <span>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </span>
            <Footer />
        </HistoricoHTML>
    )
}

const HistoricoHTML = styled.div`
    background-color: #E5E5E5;
    padding-top: 100px;
    width: 100vw;
    height: 100vh;
    span{
        display: flex;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-left: 10px;
        margin-right: 10px;
    }
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    .subHeader{
        display: flex;
        flex-direction: column;
        height: 60px;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 10px 0 10px;
    }
`;