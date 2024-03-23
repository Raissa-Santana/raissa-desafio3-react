import * as S from "./components/Header/styled_header.jsx";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
  return (
    <>
      <S.GlobalStyled />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
