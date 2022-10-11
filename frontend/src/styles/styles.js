import styled from "styled-components";

//APP styles
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2``;

// Form styles
export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 15px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 35px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 150px;
  padding: 0 20px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: #fff;
  width: 120px;
  height: 45px;
`;
