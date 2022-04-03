import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components"

import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";

import { UseContext } from "react";
import userINFO from "../contexts/userINFO";

export default function App(){
    
    return(
        // <UseContext.Provider value={ {loginINFO, setLoginINFO} }>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/habitos" element={<Habitos/>} />
                </Routes>
            </BrowserRouter>
        // </UseContext.Provider>
    )
}