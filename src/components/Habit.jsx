import styled from "styled-components";

export default function Habit(props){

    const days = [['D',1],['S',2],['T',3],['Q',4],['Q',5],['S',6],['S',7]]
    const listWeekDays = props.listWeekDays
    
    function Day(props){
        return (
            <button className={props.className} id='1' > {props.day} </button>
        )
    }
return(
    <HabitHTML>
        <h1>{props.habitName}</h1>
        <div className="teste">
            {days.map( (day) => { if( listWeekDays.includes(day[1]) ){
                                    return(
                                        <Day    className='days selecionado'
                                                day={day[0]} /> )}   
                                else{
                                    return(
                                        <Day    className='days'
                                                day={day[0]} /> )} 
                                } 
                        )}
        </div>                   
    </HabitHTML>
    )
}

const HabitHTML = styled.article`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 10px 10px 10px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 30px;
        h1{
            font-family: 'Lexend Deca', sans-serif;
            display: flex;
            align-items: center;
            text-align: center;
            width: 303px;
            height: 45px;
            /* background: #FFFFFF; */
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid #D4D4D4;
            color: #666666;
            border: none;
        }
        .teste{
            height: 100%;
        }
`;