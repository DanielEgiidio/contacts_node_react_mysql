import React, { useRef, useEffect } from "react";
import * as S from "../styles/styles";
import axios from "axios";
import { toast } from "react-toastify";

export const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <S.FormContainer ref={ref} onSubmit={handleSubmit}>
      <S.InputArea>
        <S.Label>Nome:</S.Label>
        <S.Input name="nome" />
      </S.InputArea>
      <S.InputArea>
        <S.Label>Email:</S.Label>
        <S.Input name="email" type="email" />
      </S.InputArea>
      <S.InputArea>
        <S.Label>Telefone:</S.Label>
        <S.Input name="fone" />
      </S.InputArea>
      <S.InputArea>
        <S.Label>Data de Nascimento:</S.Label>
        <S.Input name="data_nascimento" type="date" />
      </S.InputArea>

      <S.Button type="submit">Salvar</S.Button>
    </S.FormContainer>
  );
};
