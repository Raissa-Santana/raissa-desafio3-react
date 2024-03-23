import styled, {css} from "styled-components"

const center = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Footer = styled.footer`
    background-color: aliceblue;
    padding: 15px 50px;
    ${center}

    .logo{
        ${center}
        gap: 30px;

        p{
            color: #585858;
            font-size: 15px;
        }
        
        img{
            width: 30px;
        }
    }

    .loja{
        ${center}
        gap: 30px;

        img{
            height: 30px;
            width: 90px;
        }
    }
`