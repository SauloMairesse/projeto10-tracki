import styled from "styled-components"

export default function Footer(){
    return(
        <FooterHTML>
            <div>
                <h4> Hábitos </h4>
                <h6> Hpje </h6>
                <h5> Histórico</h5>
            </div>
        </FooterHTML>
    )
}

const FooterHTML = styled.footer`
        display: flex;
        position: fixed;
        bottom: 0;
        justify-content: space-around;
        align-items: center;
        background: red;
        width: 100vw;
        height: 60px;
    div{
        width: 340px;
    }
`;