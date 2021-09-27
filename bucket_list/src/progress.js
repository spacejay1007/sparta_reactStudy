import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const Progress = (props) => {
    const bucket_list=useSelector((state)=> state.bucket.list);
    // console.log(bucket_list);

    let count=0;
    bucket_list.map((b,idx) => {
        if(b.completed){
            count ++;
        }
    })
    console.log(count);
    return (
        // const bucket_list = useSelector((state) => state.bucket.list); console.log(bucket_list); let count = 0; bucket_list.map((b, idx) => { if(b.completed){ count ++; } }) console.log(count);
        // <p>sdf</p>
        // <Container>
        <ProgressBar>
            <HighLight width={(count/bucket_list.length)*100 +"%"}/>
            <Circle/>
        </ProgressBar>
        // </Container>
        // </>
    );

};

// const Container = styled.div` display: flex; height: 100vh; flex-direction: column; align-items: center; justify-content: ${(props) => props.is_main? "center" : "space-between"}; padding: 16px; box-sizing: border-box; `;


const ProgressBar = styled.div`
    background:#eee;
    width:100%;
    height:25px;
    display:flex;
    border-radius:5px;
    align-items:center;
`;

const HighLight = styled.div`
    background:lightblue;
    transition: 1s;
    width: ${props => props.width};
    height:25px;
    border-radius:5px;
`;

const Circle = styled.div`
    background:#FFF;
    width:35px;
    height:35px;
    border:3px solid #1E90FF;
    border-radius:35px;
    margin : 0px,0px,0px,-20px
`;

export default Progress;