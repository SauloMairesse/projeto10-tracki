import styled from "styled-components"
import imagem from "../images/TrackIt.png"

export default function Header(props){
    return(
        <HeaderHTML>
                    <img className="nomesite" src={imagem} alt="" />
                    <img className="userIMG" src={props.userImg} alt="" />
        </HeaderHTML>
    )
}

const HeaderHTML = styled.header`
        display: flex;
        position: fixed;
        height: 70px;
        width: 375px;
        top: 0;
        align-items: center;
        justify-content: space-between;
        background: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        z-index: 1;
    .userIMG{
        display: flex;
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .nomesite{
        display: flex;
        width: 90px;
        height: 49px;
        object-fit: scale-down;
        margin-left: 20px;
    } 
    .nameSite{
        color: #fff;
        margin-left: 20px;
    }  
`;