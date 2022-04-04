import React from "react"
import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom"
import "../styles/reset.css"
import axios from "axios"
import usuarioINFO from "../contexts/userINFO"
import Header from "./Header"
import Footer from "./Footer"
import Habit from "./Habit"
import "../styles/style.css"

export default function Habitos(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    const [addHabit, setAddHabit] = React.useState(false)
    const [newHabit, setNewHabit] = React.useState({ name: ""})
    const [listHabits, setListHabits] = React.useState([])
    const [listDaysSelected, setListDaysSelected] = React.useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${userINFO.token}`
        }
    }

    function postNewHabit(event){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const promise = axios.post(URL, {name: newHabit.name,
                                         days: listDaysSelected}, config)
        promise.then( (response) => {setListHabits(listHabits)} )
        promise.catch( (err) => console.log(err) )
    }

    React.useEffect( () => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then( (response) => { setListHabits(response.data)} )
        promise.catch( (err) => console.log(err))   }   ,[])

    function requestListHabits(){
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            promise.then( (response) => {setListHabits(response.data)} )
            promise.catch( (err) => console.log(err))   }

    if(listHabits.length === 0){
        return(
            <HabitosHTML> 
                <Header userImg={userINFO.image}/>
                <main>
                    <div className="subHeader">
                        <h3>Meus hábitos</h3>
                        <button className="add-hobby" onClick={ () => { addHabit === false ? setAddHabit(true) : setAddHabit(false) } }><p>+</p></button>
                    </div>

                    <section className={ addHabit === false ? 'desable' : 'new-habit' } >
                        <input type="text"  value={newHabit.name}
                                            placeholder={'Qual o Novo Habito'} 
                                            onChange={ (e) => setNewHabit({...newHabit, name: e.target.value}) }/>
                        <div>
                            <button className="days" id='1' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                                                e.target.className = 'days'
                                                                                setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                                                else{
                                                                                    e.target.className = 'days selecionado'
                                                                                    setListDaysSelected([...listDaysSelected, '1']) }
                                                                                } }> 
                                D   </button>
                            <button className="days" id='2' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '2']) }
                                                            } }> 
                            S  </button>
                            <button className="days" id='3' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '3']) }
                                                            } }> 
                            T  </button>
                            <button className="days" id='4' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '4']) }
                                                            } }> 
                            Q  </button>
                            <button className="days" id='5' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '5']) }
                                                            } }> 
                            Q  </button>
                            <button className="days" id='6' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '6']) }
                                                            } }> 
                            S  </button>
                            <button className="days" id='7' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '7']) }
                                                            } }> 
                            S  </button>
                        </div>
                        <div className="complete-hobby">
                            <button onClick={() => setAddHabit(false)} className="cancel"> <p>Cancelar</p> </button>
                            <button onClick={ () => {postNewHabit()
                                                    requestListHabits() 
                                                    setAddHabit(false) } } className="save"> <p>Salvar</p> </button>
                        </div>
                    </section>

                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                
                </main>
                <Footer/>
            </HabitosHTML>
        )
    }
    else{
        return(
            <HabitosHTML> 
                <Header userImg={userINFO.image}/>
                <main>
                    <div className="subHeader">
                        <h3>Meus hábitos</h3>
                        <button className="add-hobby" onClick={ () => { addHabit === false ? setAddHabit(true) : setAddHabit(false) } }><p>+</p></button>
                    </div>
                    <section className={ addHabit === false ? 'desable' : 'new-habit' } >
                        <input type="text"  value={newHabit.name}
                                            placeholder={'Qual o Novo Habito'} 
                                            onChange={ (e) => setNewHabit({...newHabit, name: e.target.value}) }/>
                        <div>
                            <button className="days" id='1' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                                                e.target.className = 'days'
                                                                                setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                                                else{
                                                                                    e.target.className = 'days selecionado'
                                                                                    setListDaysSelected([...listDaysSelected, '1']) }
                                                                                } }> 
                                D   </button>
                            <button className="days" id='2' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '2']) }
                                                            } }> 
                            S  </button>
                            <button className="days" id='3' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '3']) }
                                                            } }> 
                            T  </button>
                            <button className="days" id='4' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '4']) }
                                                            } }> 
                            Q  </button>
                            <button className="days" id='5' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '5']) }
                                                            } }> 
                            Q  </button>
                            <button className="days" id='6' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '6']) }
                                                            } }> 
                            S  </button>
                            <button className="days" id='7' onClick={ (e) => {if(e.target.className === 'days selecionado'){
                                                            e.target.className = 'days'
                                                            setListDaysSelected(listDaysSelected.filter( day => day !== e.target.id)) }
                                                            else{
                                                                e.target.className = 'days selecionado'
                                                                setListDaysSelected([...listDaysSelected, '7']) }
                                                            } }> 
                            S  </button>
                        </div>
                        <div className="complete-hobby">
                            <button onClick={() => setAddHabit(false)} className="cancel"> <p>Cancelar</p> </button>
                            <button onClick={ () => {postNewHabit() 
                                                    requestListHabits()
                                                    setAddHabit(false)  } } className="save"> <p>Salvar</p> </button>
                        </div>
                    </section>
                    <div className="list-habits">
                        {listHabits.map( habit => <Habit    habitName={habit.name}
                                                            listWeekDays={habit.days} /> )}
                    </div>
                </main>
                <Footer/>
            </HabitosHTML>
        )
    }
}

const HabitosHTML = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 70px 0 70px 0;
    background: #E5E5E5;
    main{
        padding: 0 10px 0 10px;
        width: 340px;
        height: 100vh;
        background: #E5E5E5;

    }
    .list-habits{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 60px;
        background: #E5E5E5;
    }
    .subHeader{
        display: flex;
        width: 100%;
        height: 90px;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 10px;
    }
    .add-hobby{
        display: flex;
        border: none;
        width: 40px;
        height: 35px;
        justify-content: center;
        align-items: center;
        background: #52B6FF;
        padding-bottom: 4px;
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

    .new-habit{
        background: #FFFFFF;
        border-radius: 5px;
        padding: 10px 10px 10px 10px;
        margin: 10px 0 30px 0 ;
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
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        color: #000;
        margin-bottom: 8px;
    }
    input::placeholder{
        color: #8e8e8e;
    }
    div{
        display: flex;
    }
    .complete-hobby{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-top: 30px;
    }
    .save{
        display: flex;
        border: none;
        height: 35px;
        width: 84px;
        justify-content: center;
        align-items: center;
        background: #52B6FF;
        padding-bottom: 4px;
        border-radius: 4.63636px;
        margin-left: 20px;
    }
    .save p{
        font-size: 15.976px;
        color: #fff;
    }
    .cancel{
        display: flex;
        border: none;
        height: 35px;
        width: 100px;
        justify-content: center;
        align-items: center;
        background: #fff;
        padding-bottom: 4px;
        border-radius: 4.63636px;
    }
    .cancel p {
        font-size: 15.976px;
        color: #52B6FF;

    }
    .days{
        font-family: 'Lexend Deca', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        box-sizing: border-box;
        border-radius: 5px;
        border-color: #8e8e8e;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        color: #DBDBDB;
    }
    .selecionado{
        background: #CFCFCF;
        color: #fff
    }
    .desable{
        display: none;
    }
`;