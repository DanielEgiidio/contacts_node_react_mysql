import React from "react";
import * as S from "../styles/styles";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

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
            <S.Td width="30%">{item.nome}</S.Td>
            <S.Td width="30%">{item.email}</S.Td>
            <S.Td width="20%" onlyWeb>
              {item.fone}
            </S.Td>
            <S.Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </S.Td>
            <S.Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </S.Td>
          </S.Tr>
        ))}
      </S.TBody>
    </S.Table>
  );
};
