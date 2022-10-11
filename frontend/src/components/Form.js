import React, { useRef } from "react";
import * as S from "../styles/styles";

export const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <S.FormContainer ref={ref}>
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
