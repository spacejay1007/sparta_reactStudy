import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createDic, loadDicFB, addDicFB } from "./redux/modules/dic";

const AddDic = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const wordRef = React.useRef(null);
  const descRef = React.useRef(null);
  const exmpRef = React.useRef(null);

  const addDicList = () => {
    const word = wordRef.current.value;
    const desc = descRef.current.value;
    const exmp = exmpRef.current.value;
    // console.log(word, desc, exmp);
    dispatch(loadDicFB());
    dispatch(addDicFB({ word:word, desc:desc, exmp:exmp }));
    
    
    dispatch(createDic({ word: word, desc: desc, exmp: exmp }));
    history.push("/");
  };

  return (
    <AddContainer>
      <DicTitle>추가하기</DicTitle>
      <AddLine />
      <Input>
        <p>단어</p>
        <input type="text" ref={wordRef} />
        <p>설명</p>
        <input type="text" ref={descRef} />
        <p >예시</p>
        <input type="text" ref={exmpRef} />
        <button onClick={addDicList}>추가하기</button>
      </Input>
    </AddContainer>
  );
};

export default AddDic;


const AddContainer = styled.div`
  max-width: 350px;
  min-height: 35vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const DicTitle = styled.h1`
  color: #A9A9A9;
  text-align: center;
`;

const AddLine = styled.hr`
  margin: 16px;
  border: 1px solid #ddd;
`;
const Input = styled.div`
  max-width: 350px;
  min-height: 30vh;
  background-color: #fff;
  padding: 4px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #A9A9A9;
  text-align: center;

  & > * {
    padding: 5px;
  }

  & p {
    color: #A9A9A9;
    font-weight:bold;
    text-align: center;
  }

  & input {
    border: 1px solid #A9A9A9;
    height: 30px;
    width: 320px;
  }

  & button {
    font-size: 25px;
    width: 330px;
    height: 70px;
    color: #fff;
    border: #4169e1;
    background: #4169e1;
    border-radius: 2px;
    margin: 5px;
  }
`;
