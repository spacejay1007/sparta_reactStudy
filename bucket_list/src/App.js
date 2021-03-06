import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import {useDispatch} from "react-redux";
import {createBucket, loadBucketFB, addBucketFB } from "./redux/modules/bucket";
import { db } from "./firebase";
import { collection, doc, getDoc, getDocs ,addDoc, updateDoc, deleteDoc} from "@firebase/firestore";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import Progress from "./progress";
import { async } from "@firebase/util";



function App() {

    const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
    const text = React.useRef(null);
    const dispatch = useDispatch();

    //fire base
    React.useEffect(() => {
        dispatch(loadBucketFB());
        // console.log(db);

    // getDocs 구문        
        // const query = await getDocs(collection(db, "bucket"));
        // console.log(query);
        // query.forEach((doc) => {
        //     console.log(doc.id,doc.data());
        // });

    // addDoc 구문
        // addDoc(collection(db, "bucket"), {text:"new",completed:false});
   
    // updateDoc 구문
        // const docRef = doc(db, "bucket", "nnNKm34BXcBDUF84WtUl");
        // updateDoc(docRef, {completed: true});

    // deleteDoc 구문
    // const docRef = doc(db, "bucket", "9rS31H7tLSaHhW1lE0pk");
    // deleteDoc(docRef)
    }, []);
    //end fire base 

    const addBucketList = () => {
        // 스프레드 문법! 기억하고 계신가요? :) 
        // 원본 배열 list에 새로운 요소를 추가해주었습니다.
        // setList([...list, text.current.value]);
        // dispatch(createBucket(text.current.value));
        // dispatch(createBucket({text:text.current.value, completed:false}));
        // dispatch(createBucket({text:text.current.value, completed:false}));
        dispatch(addBucketFB({text:text.current.value, completed:false}));
    };
    // console.log(addBucketList);

    console.log(list);
    return (
        <div className="App">
            <Container>
                <Title>내 버킷리스트</Title>
                <Progress/>
                <Line />
                {/* 컴포넌트를 넣어줍니다. */}
                {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}


                <Switch>
                    <Route path="/" exact
                        render={(props) => (
                            <BucketList list={list} />
                        )}
                    />
                    <Route path="/detail/:index" component={Detail} />
                    <Route><NotFound /></Route>
                </Switch>
            </Container>
            {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
            <Input>
                <input type="text" ref={text} />
                <button onClick={addBucketList}>추가하기</button>
            </Input>
            
            <button onClick={() => {
                window.scrollTo({top:0, left:0, behavior:"smooth"});
                //스크롤을 맨위로 올려주는 내장함수 (0,0 = 좌표) top:0, left:0, behavior:smooth
            }}>위로가기</button>
        </div>
    );
}

const Input = styled.div`
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;

& > * {
    padding:5px;
}
& input{
    border:1px solid #eee;
    height:70%;
}
& input:focus{
    outline: none;
    border:1.5px solid #1E90FF;
}
& button{
    width:25%;
    color:#fff;
    border:#4169E1;
    background:#4169E1;
    border-radius: 2px;
    margin:10px;
}

`;

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
color: #191970;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;