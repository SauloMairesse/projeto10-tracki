import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route parth="/" element={<Login/>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}