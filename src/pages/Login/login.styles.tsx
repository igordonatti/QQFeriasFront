import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivLogin = styled.div`
  height: 703px;
  width: 793px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  background-color: #018749;
  border-radius: 16px;
  color: white;
  font-weight: bold;
  align-items: center;
`;

export const P = styled.p`
  font-size: 40px;
`;

export const Input = styled.input`
  outline: none;
  height: 40px;
  width: 200px;
  border-radius: 16px;
  border: none;
  margin-top: 5px;
  background-color: rgb(255, 249, 108, 0.65);
`;