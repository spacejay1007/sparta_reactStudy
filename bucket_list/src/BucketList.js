// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = (props) => {
    let history = useHistory();
    // console.log(props);
    // const my_lists = props.list;  // app.js (app component 에서 받아오는 리스트)
    // 아래는 redux hook 으로 받아오는 내용
    const my_lists = useSelector((state) => state.bucket.list);

    console.log(my_lists);
    // return null;
    return (
        <ListStyle>
            {my_lists.map((list, index) => {
                return (
                    <ItemStyle completed={list.completed} className="list_item" key={index} onClick={() => {
                        history.push("/detail/"+index);
                    }}>
                        {list.text}
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
max-height:40vh;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
color:${(props) => props.completed? "#fff":"black"};
background-color: ${(props) => props.completed? "lightblue":"aliceblue"};
font-weight:${(props) => props.completed? "bold":""};
border-radius:3px;
`;

export default BucketList;