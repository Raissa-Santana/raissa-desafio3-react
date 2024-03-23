import * as S from "./styled_main.jsx"
import mac from '../../assets/burguer.png'
import batata from '../../assets/fritas.png'
import sorvete from '../../assets/ice.png'
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.jpg"
import banner from "../../assets/banner.jpg"
import Card from './Card'
import { useState } from 'react'


export default function Main() {

    const [item, setItem] = useState(mac)

    // function bigmac(){
    //     setItem(mac)
    // }
     function batataFrita(){
        setItem(batata)
    }
     function casquinha(){
        setItem(sorvete)
    }


  return (
    <S.Main>
        <section>
        <S.Principal>
            <img className="item" src={item} alt="" />
            <h1>BATEU AQUELA <br />
            <span>#FOME</span> DE <span>MÉQUI</span>?</h1>
        </S.Principal>
            <S.Figure>
                <img className="img" onClick={()=>{setItem(mac)}} src={mac} alt="" />
                <img className="img" onClick={batataFrita} src={batata} alt="" />
                <img className="img" onClick={casquinha} src={sorvete} alt="" />
            </S.Figure>
        </section>
        <S.Section>
            <h2>Promoção</h2>
            <S.Card>
                <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"}/>
                <Card imagem={loja} texto={"Venha conhecer nossa nova loja"}/>
                <Card imagem={banner} texto={"Confira as medidas que o Méqui adotou!"}/>
            </S.Card>
        </S.Section>
    </S.Main>
  )
}
