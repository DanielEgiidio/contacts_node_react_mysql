import GlobalStyle from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "./components/Form.js";
import * as S from "./styles/styles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <S.Container>
        <S.Title>Usuários:</S.Title>
        <Form />
      </S.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
      <GlobalStyle />
    </>
  );
}

export default App;
