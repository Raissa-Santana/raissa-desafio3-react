import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`

const center = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Header = styled.header`
    background-color: #ffffff;
    padding: 10px 30px;
    height: 80px;

    img{
        height: 50px;
    }

    .menu{
        ${center}
    }
    .btn{
        ${center}
        gap: 35px;
    }

    .App{
       a{
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 5px;
        gap: 15px;
        overflow: hidden;
       }

       img{
        height: 30px;
       }

       &:hover{
        border-bottom: 2px solid black;
       }
    }

    button{
        width: 180px;
        height: 50px;
        border: none;
        padding: 2px 5px;
        background-color:  #FFC72C;
        color: black;
        font-weight: 600;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;

        img{
            height: 30px;
        }

        &:hover{
            background-color: #d40000;
            transition: all 800ms;
        }
    }
`
