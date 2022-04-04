import styled from "styled-components";
import React from "react";
import vetor from '../images/Vector.png';

export default function HabitToday(props){

    const [done, setDone] = React.useState(props.done)

    function checkHabit(){

    }
    return(
        <HabitTodayHTML id={props.id}>
            <div className="infor">
                <h1 className="name">{props.name}</h1>
                <p>Sequência atual: {props.currentSequence} dias</p>
                <p>Maior sequência: {props.highestSequence} dias</p>
            </div>
            <div className="referencia">
                <button className={ done === false ? '' : 'done' }
                        onClick={(e) => {if(e.target.className === ''){
                                        e.target.className = 'done' }
                                        else{
                                        e.target.className = ''}    } }>
                </button>
                <img className="imagem" src={vetor} alt="" />
            </div>              
        </HabitTodayHTML>
    )
}

const HabitTodayHTML = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* width: 320px; */
        background: #FFFFFF;
        border-radius: 5px;
        padding: 10px 10px 10px 10px;
        margin:  0 10px 20px 10px;
        .name{
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            margin-bottom: 10px;
        }
        p{
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }
        button{
            width: 69px;
            height: 69px;
            box-sizing: border-box;
            border-radius: 5px;
            background: #EBEBEB;
            border: 1px solid #E7E7E7
        }
        .done{
            background-color: #8FC549;
        }
        .referencia{
            position: relative;
        }
        .imagem{
            position: absolute;
            left: 20px;
            top: 20px;
            position: absolute;
            background-color: none;
        }
`;