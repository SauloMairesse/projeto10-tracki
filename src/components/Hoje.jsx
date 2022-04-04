import React from "react"
import styled from "styled-components"
import axios from "axios"

import Header from "./Header"
import usuarioINFO from "../contexts/userINFO"

export default function Hoje(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    const config = {
        headers: {
            Authorization: `Bearer ${userINFO.token}`
        }
    }

    React.useEffect( () => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then( (response) => { console.log('habitos Hoje', response.data) } )

        promise.catch( (err) => console.log(err))   }   ,[])

    return(
        <HojeHTML>
             <Header userImg={userINFO.image}/>
            <div className="subHeader">
                <h1>Dia Da Semana</h1>
                <h2>Nenhum hábito concluído ainda</h2>
                <button className="add-hobby">  </button>
            </div>
        </HojeHTML>
    )
}

const HojeHTML = styled.div`

    .subHeader{

    }
`;