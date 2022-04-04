import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components"

import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";

import { useContext} from "react";
import usuarioINFO from "./../contexts/userINFO";
import Hoje from "./Hoje";

export default function App(){

    const [userINFO, setUserINFO] = React.useState({}) 

    return(
        <usuarioINFO.Provider value={{userINFO, setUserINFO}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/hoje" element={<Hoje/>} />
                    <Route path="/habitos" element={<Habitos/>} />
                </Routes>
            </BrowserRouter>
        </usuarioINFO.Provider>
    )
}