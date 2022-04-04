import React from "react"
import styled from "styled-components"
import axios from "axios"
import dayjs from 'dayjs'
import Header from "./Header"
import usuarioINFO from "../contexts/userINFO"
import HabitToday from "./HabitToday"
import Footer from "./Footer"
import "../styles/style.css"

export default function Hoje(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)
    const [listHabitsToday, setListHabitsToday] = React.useState([])
    const config = {
        headers: {
            Authorization: `Bearer ${userINFO.token}`
        }
    }
    var dayjs = require('dayjs')
    //import dayjs from 'dayjs' // ES 2015
    let a = dayjs().format('LLLL')

    React.useEffect( () => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then( (response) => { setListHabitsToday(response.data)} )

        promise.catch( (err) => console.log(err))   }   ,[])

    return(
        <HojeHTML>
            <Header userImg={userINFO.image}/>
            <div className="subHeader">
                <h1>Segunda, 23/01</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </div>
            <div className="corfundo">
                {listHabitsToday.map( habit => <HabitToday  name={habit.name}
                                                            currentSequence={habit.currentSequence}
                                                            highestSequence={habit.highestSequence}
                                                            done={habit.done}/>)}
            </div>
            <Footer/>
        </HojeHTML>
    )
}

const HojeHTML = styled.div`
    display: flex;
    flex-direction:  column;
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    background: #E5E5E5;
    .corfundo{
        background-color: #E5E5E5;
        padding-bottom: 100px;
    }
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