import React from "react"
import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom"

import { useContext } from "react"
import userINFO from "../contexts/userINFO"

export default function Habitos(){


    const [addHabit, setAddHabit] = React.useState(0)
    const [newHabit, setNewHabit] = React.useState({ name: ""})
    let days = []

    const {data} = useContext(userINFO)
    console.log(data)

    if(addHabit === 0 ){
        return(
            <HabitosHTML> 
                <header>
                    <h1>teste</h1>
                    <h2>imagem</h2>
                </header>
                <main>
                    <section>
                        <h3>Meus hábitos</h3>
                        <button className="add" onClick={ () => setAddHabit(1) }><p>+</p></button>
                    </section>
                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                </main>
                <footer>
                    <h4> Hábitos </h4>
                    <h5> Histórico</h5>
                </footer>
            </HabitosHTML>
        )
    }

    if(addHabit === 1){
        return(
            <HabitosHTML> 
                <header>
                    <h1>teste</h1>
                    <h2>imagem</h2>
                </header>
                <main>
                    <section>
                        <h3>Meus hábitos</h3>
                        <button className="add"> <p>+</p> </button>
                    </section>
                    <section className="new-habit">

                        <input type="text"  value={newHabit.name}
                                            placeholder={'Qual o Novo Habito'} 
                                            onChange={ (e) => setNewHabit({...newHabit, name: e.target.value}) }/>

                        <div>
                            <button className="days" id='1' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                                e.target.className = 'days'
                                                                days = days.filter( day => day !== e.target.id)}
                                                                else{
                                                                    e.target.className = 'days selecionado'
                                                                    days = [...days, '1']
                                                                    console.log(days.push('1'))
                                                                }} }> 
                                D   </button>
                            <button className="days" id='2' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            days = days.filter( day => day !== e.target.id)}
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                days = [...days, '2']
                                                            }} }> 
                            S  </button>
                            <button className="days" id='3' >S</button>
                            <button className="days" id='4' >T</button>
                            <button className="days" id='5' >Q</button>
                            <button className="days" id='6' >Q</button>
                            <button className="days" id='7' >S</button>
                        </div>

                        <div>
                            <button className="add"> <p>Salvar</p> </button>
                            <button className="add"> <p>Cancelar</p> </button>
                        </div>

                    </section>

                </main>
                <footer>
                    <h4> Hábitos </h4>
                    <h5> Histórico</h5>
                </footer>
            </HabitosHTML>
        )
    }
}

const HabitosHTML = styled.div`
    display: flex;
    flex-direction: column;
    background: #F2F2F2;
    width: 100%;
    height: 100vh;

    header{
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 10px;
        background: #126BA5;
    }
    main{
        padding: 0 18px 0 18px;
    }
    section{
        display: flex;
        height: 90px;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 10px;
        /* background: #E5E5E5;     */
    }
    span{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;
    }
    .add{
        display: flex;
        border: none;
        width: 40px;
        height: 35px;
        justify-content: center;
        align-items: center;
        background: #52B6FF;
        padding-bottom: 4px;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: center;
        color: #E5E5E5;
    }
    h3{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    footer{
        position: fixed;
        bottom: 0;
        background-color: greenyellow;
        width: 100vw;
        height: 100px;
    }
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        border-color: #8e8e8e;
    }
    div{
        display: flex;
    }
    article:hover {
        cursor: pointer;
    }
    .new-habit{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 10px 10px 10px;
        background-color: #fff;
    }
    .days{
        font-family: 'Lexend Deca', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        border-color: #8e8e8e;
        margin-right: 5px;
        background-color: #FFFFFF;
    }
    .selecionado{
        background-color:  red;
    }
    
`;