import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components"
import Login from "./Login";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route parth="/cadastro" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

// Animation Login Button by biblioteca
