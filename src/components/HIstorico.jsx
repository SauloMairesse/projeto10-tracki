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

            <Footer />
        </HistoricoHTML>
    )
}

const HistoricoHTML = styled.div`

`;