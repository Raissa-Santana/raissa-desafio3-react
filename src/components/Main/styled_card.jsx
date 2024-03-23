import styled from "styled-components"


export const Card = styled.div`
    background-color: aliceblue;
    width: 315px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 25px;

    img{
        width: 325px;
        height: 180px;
    }

    .texto{
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            margin-top: 10px;
            height: 60px;
            padding: 0 15px;
            font-size: 20px;
        }

        button{
            border: none;
            margin-top: 20px;
            background-color:#FFBC0D;
            padding: 10px;
            width: 150px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;

            &:hover{
                background-color: #af0000;
                color: aliceblue;
                transition: all 200ms;
            }
        }
    }
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.2);
    }
`