import styled from "styled-components"

export default function Footer(){
    return(
        <FooterHTML>
            <h4> Hábitos </h4>
            <h6> Hpje </h6>
            <h5> Histórico</h5>
        </FooterHTML>
    )
}

const FooterHTML = styled.footer`
        position: fixed;
        bottom: 0;
        background-color: greenyellow;
        width: 100vw;
        height: 100px;
`;