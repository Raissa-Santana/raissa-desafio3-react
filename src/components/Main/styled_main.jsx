import styled from "styled-components"

export const Main = styled.main`
    background-color: #FFC72C;
;
    height: 100%;
    width: 100%;
`

export const Principal = styled.div`
height: 515px;
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;

h1{
   color: aliceblue;
   font-size: 70px;
   white-space: pre-line;
}

span{
    color: #c90000;
}

.item{
   width: 400px;
   height: 300px;
}
`

export const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    .img{
        width: 190px;
        cursor: pointer;
    }
`

export const Section = styled.section`
    margin-top: 2px;
    padding-top: 50px;
    background-color: #FEB706;
    height: 600px;

    h2{
        text-align: center;
        color: aliceblue;
        margin-bottom: 50px;
        font-size: 30px;
        font-weight: 800;
    }
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    img{
        width: 320px;
    }
`