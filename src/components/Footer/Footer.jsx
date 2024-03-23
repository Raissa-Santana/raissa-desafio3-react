import android from "../../assets/google play.png"
import ios from "../../assets/apple play.png"
import logo from "../../assets/logo mec.png"
import * as S from "./styled_footer"

export default function Footer() {
  return (
    <S.Footer>
        <div className="logo">
            <img src={logo} />
            <p>© McDonald’s 2024</p>      
        </div>
        <div className="loja">
           <a href="#"> <img src={android} /> </a>
           <a href="#"> <img src={ios} /> </a>   
        </div>
    </S.Footer>
  )
}
