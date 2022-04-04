import styled from "styled-components"

export default function Header(props){
    return(
        <HeaderHTML>
                    <h1>Nome Site</h1>
                    <img src={props.userImg} alt="" />
        </HeaderHTML>
    )
}

const HeaderHTML = styled.header`
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 10px;
        background: #126BA5;
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;