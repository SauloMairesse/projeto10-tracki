import styled from "styled-components"

export default function Header(props){
    return(
        <HeaderHTML>
                    <h1 className="nameSite">Nome Site</h1>
                    <img src={props.userImg} alt="" />
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
    img{
        display: flex;
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 20px;
    } 
    .nameSite{
        color: #fff;
        margin-left: 20px;
    }  
`;