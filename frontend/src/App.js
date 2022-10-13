import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "./components/Form.js";
import { Grid } from "./components/Grid.js";
import * as S from "./styles/styles";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <S.Container>
        <S.Title>USUÁRIOS</S.Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </S.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
      <GlobalStyle />
    </>
  );
}

export default App;
