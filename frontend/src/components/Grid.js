import React from "react";
import * as S from "../styles/styles";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export const Grid = ({ users }) => {
  return (
    <S.Table>
      <S.THead>
        <S.Tr>
          <S.Th>Nome:</S.Th>
          <S.Th>Email:</S.Th>
          <S.Th onlyWeb>Fone:</S.Th>
          <S.Th></S.Th>
          <S.Th></S.Th>
        </S.Tr>
      </S.THead>
      <S.TBody>
        {users.map((item, i) => (
          <S.Tr key={i}>
            <S.Td width="30%">{item.name}</S.Td>
            <S.Td width="30%">{item.email}</S.Td>
            <S.Td width="20%" onlyWeb>
              {item.phone}
            </S.Td>
            <S.Td alignCenter width="5%">
              <FaEdit />
            </S.Td>
            <S.Td alignCenter width="5%">
              <FaTrash />
            </S.Td>
          </S.Tr>
        ))}
      </S.TBody>
    </S.Table>
  );
};
