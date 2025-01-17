// eslint-disable-next-line

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { __postTodo } from "../../redux/modules/todoSlice";
import { useDispatch } from "react-redux";
import Button from "../../elements/Button";
import Input from "../../elements/Input";

function TodoAddForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    user: "",
    title: "",
    body: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(__postTodo(inputs));
        navigate("/todos");
        setInputs({ user: "", title: "", body: "" });
      }}
    >
      <label htmlFor="user">작성자</label>
      <Input
        size="wide"
        type="small"
        name="user"
        placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
        max="5"
        onChange={onChange}
        value={inputs.user}
      />
      <label htmlFor="title">제목</label>
      <Input
        size="wide"
        type="small"
        name="title"
        placeholder="제목을 입력해주세요.(50자 이내)"
        max="50"
        onChange={onChange}
        value={inputs.title}
      />
      <label htmlFor="body">내용</label>
      <Textarea
        rows="19"
        name="body"
        placeholder="내용을 입력해주세요.(200자 이내)"
        maxlength="200"
        onChange={onChange}
        value={inputs.body}
      />
      <Button size="large">추가하기</Button>
    </StForm>
  );
}

export default TodoAddForm;

const StForm = styled.form`
  position: relative;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.6rem;
    margin: 15px 0;
  }
  input {
    font-size: 1rem;
  }
  button {
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  padding: 12px;
  font-size: 14px;
`;
