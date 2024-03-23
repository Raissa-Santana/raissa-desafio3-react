import * as S from "./styled_card"

const click = () => {
  alert('O botão foi clicado!');
};

export default function Card(props) {
  return (
    <S.Card>
        <img src={props.imagem} alt="" />
        <div className="texto">
              <h3>{props.texto}</h3>
              <button onClick={click}>Clique aqui</button>
        </div>
    </S.Card>
  )
}