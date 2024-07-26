import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ postRequest }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const maxLength = 10; 

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > maxLength) {
      setError(`Максимальное количество символов: ${maxLength}`);
    } else {
      setError("");
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      postRequest({
        inputValue,
      });
      setInputValue("");
    }
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          value={inputValue}
          type="text"
          required
          maxLength={maxLength}
        />
        <StyledButton type="submit">Добавить</StyledButton>
      </StyledForm>
      {error && <ErrorText>{error}</ErrorText>}
    </StyledDiv>
  );
};

export default TodoForm;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

const StyledForm = styled.form`
  width: 600px;
  height: 100px;
  background: #158cfb;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 10px;
  width: 200px;
  margin-right: 10px;
  border-radius: 5px;
  border: 2px solid #ddd;
  outline: none;
  font-size: 16px;
  margin-left: 50px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #23ef18;
    box-shadow: 0 0 0 3px rgba(35, 239, 24, 0.3);
  }
`;

const StyledButton = styled.button`
  padding: 10px 40px;
  margin-left: 5px;
  background-color: #23ef18;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #1bc56d;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(94, 204, 109, 0.5);
  }
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;
