import * as S from "./styled_header.jsx"
import logo from "../../assets/logo mec.png"
import app from "../../assets/celular mec.png"
import delivery from "../../assets/celular botão.png"

export default function Header() {

  const handleClick = () => {
    alert('O botão foi clicado!');
  };


  return (
    <S.Header>
        <div className= "menu">
            <img src={logo} alt="logo mec" />
            <div className="btn">
                <div className="App">
                    <a href="#">
                      <img src={app} alt="App" />Baixe o App
                    </a>
                </div>

                <div className="btn-delivery">
                    <button onClick={handleClick}>Peça seu mequi
                       <img src={delivery} alt="delivery" />
                    </button>
                </div>
            </div>
        </div>
    </S.Header>
  )
}
