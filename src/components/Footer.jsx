import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Footer(){
    
    const navegate = useNavigate();

    return(
        <FooterHTML>
            <h1     className="footerH1"
                    onClick={() => navegate('/habitos')} > 
                Hábitos 
            </h1>
            <div    onClick={() => navegate('/hoje')}>
                hoje
            </div>
            <h1     className="footerH1"
                    onClick={() => navegate('/historico')}> 
                Histórico
            </h1>
        </FooterHTML>
    )
}

const FooterHTML = styled.footer`
        display: flex;
        position: fixed;
        bottom: 0;
        width: 375px;
        height: 70px;
        justify-content: space-around;
        align-items: center;
        background: #fff;
    .footerH1{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 91px;
        height: 91px;
        left: 142px;
        top: 566px;
        background: #52B6FF;
        border-radius: 50%;
        margin-bottom: 40px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #fff;
    }
`;