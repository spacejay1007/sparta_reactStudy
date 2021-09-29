import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const DicList = () => {
  const history = useHistory();
  const my_lists = useSelector((state) => state.dic.list);
  // console.log(my_lists);
  
  return (
    <>
      <Container>
        <Title>나만의 단어장</Title>
        <Line />
        <ListStyle>
        {my_lists.map((dic, index) => {
          console.log(dic);
          return (
            <ItemStyle key={index}>
              <div>단어</div><p>{dic.word}</p>
              <div>설명</div><p>{dic.desc}</p>
              <div>예시</div><p style={{color:"blue",}}>{dic.exmp}</p>
            </ItemStyle>
          );
        })}
        </ListStyle>
        <Createbtn
          onClick={() => {
            history.push("/AddDic/");
          }}
        >등록하러가기          
        </Createbtn>
      </Container>
    </>
  );
};



const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;
const Title = styled.h1`
  color: 	#A9A9A9;
  text-align: center;
`;
const Line = styled.hr`
  margin: 16px;
  border: 1px solid #ddd;
`;
const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
max-height:80vh;
`;

const Createbtn = styled.button`
  font-size: 22px;
  width: 330px;
  height: 50px;
  color: #fff;
  border: #4169e1;
  background: #4169e1;
  border-radius: 2px;
  margin: 10px;
`;

const ItemStyle = styled.div`
  padding: 0px 16px 0px 16px;
  margin: 8px 0px 8px 0px;
  border: 1px solid #A9A9A9;
  border-radius : 13px;

  & div {
    margin-top: 7px;
    font-size: 13px;
    font-weight:bold;

  }
`;

export default DicList;
