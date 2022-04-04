import React from "react"
import styled from "styled-components"
import axios from "axios"

import Header from "./Header"
import usuarioINFO from "../contexts/userINFO"
import HabitToday from "./HabitToday"
import Footer from "./Footer"

export default function Hoje(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)
    const [listHabitsToday, setListHabitsToday] = React.useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${userINFO.token}`
        }
    }

    React.useEffect( () => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then( (response) => {   console.log('habitos Hoje') 
                                        setListHabitsToday(response.data)} )

        promise.catch( (err) => console.log(err))   }   ,[])

    return(
        <HojeHTML>
            <Header userImg={userINFO.image}/>
            <div className="subHeader">
                <h1>Dia Da Semana</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </div>

            {listHabitsToday.map( habit => <HabitToday  name={habit.name}
                                                        currentSequence={habit.currentSequence}
                                                        highestSequence={habit.highestSequence}
                                                        done={habit.done}/>)}
            <Footer/>
        </HojeHTML>
    )
}

const HojeHTML = styled.div`
    display: flex;
    flex-direction:  column;
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    .subHeader{
        display: flex;
        flex-direction: column;
        height: 60px;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 10px 0 10px;
        margin-bottom: 20px;
    }
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`;