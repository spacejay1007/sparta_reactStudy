import React from "react";
import img from './emo.png';

import { useHistory } from "react-router";
import {useSelector,useDispatch} from "react-redux";
import { addAnswer } from "./redux/modules/quiz";


const Quiz = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    //Redux 에서 퀴즈를 가져옴
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    console.log(quiz_list);
    //Quiz Make
    // const quiz_list = [{question : "이놈은 1살이다" , answer : false},
    //                     {question : "이놈은 남자다" , answer : true},
    //                     {question : "이놈은 코딩한다" , answer : false}];
    //state Make
   
    // const [user_answer_list , setAnswerList] = React.useState([]);
    const setAnswer = (user_answer) => {
        // console.log(user_answer);
        dispatch(addAnswer(user_answer));
        // setAnswerList([...user_answer_list, user_answer]);
    };
    console.log(user_answer_list);
    React.useEffect(() => {
        if(user_answer_list.length === quiz_list.length){
            
            // const _score=(100/quiz_list.length) * quiz_list.filter((q, idx) => {
            //     return q.answer === user_answer_list[idx];
            // }).length;   
            // // console.log(_score);
            // const score = Math.round(_score);
            // console.log(_score, score);
            history.push("/score");
            return;
        }
    } ,[user_answer_list]);
    // 첫번째 인자는 실행할 함수 [] -> dependency array 어떤것이 변했을때 1번 인자를 실행해
    
    if(user_answer_list.length === quiz_list.length){
        return null;
    }
    
    // React.useEffect(() => {
    //     // console.log(user_answer_list);
    //     if (user_answer_list.length === quiz_list.length) {
            
    //         const _score = (100/quiz_list)* quiz_list.filter((q, idx) => {
    //             return q.answer === user_answer_list[idx];
    //         }).length;   
            
    //         const score = Math.round(_score);
    //         console.log(_score, score);
    //         history.push("/score");
            
    // return
    //     }
    // }, [user_answer_list]);



    return(
        <div>

            <img src = {img} style ={{
                width:"70vw",
                margin:"16px",
            }}/>
            <p style = {{color:"white",}}>{user_answer_list.length + 1}번 문제</p>
            <h3 style = {{color:"white",}}>{quiz_list[user_answer_list.length].question}</h3>
            
                

            <div>
                <button onClick={()=> {
                    setAnswer(true);
                    
                }} style = {{width: "50px", height: "50px", margin: "16px"}}>O</button>
                
                <button onClick={()=> {
                    setAnswer(false);
                    
                }} style = {{width: "50px", height: "50px", margin: "16px"}}>X</button>
            </div>
            
        </div>
    )

}
export default Quiz;


// =================================================================

