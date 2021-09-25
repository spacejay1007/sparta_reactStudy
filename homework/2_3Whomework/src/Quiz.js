import React from "react";
import img from './emo.png';

import { useHistory } from "react-router";

const Quiz = (props) => {
    //Quiz Make
    const quiz_list = [{question : "이놈은 1살이다" , answer : false},
                        {question : "이놈은 남자다" , answer : true},
                        {question : "이놈은 코딩한다" , answer : false}]
    //state Make
    const [user_answer_list , setAnswerList] = React.useState([]);

    const history = useHistory();

    const setAnswer = (user_answer) => {
        console.log(user_answer);
        setAnswerList([...user_answer_list , user_answer])
        
    };
    
    React.useEffect(() => {
        // console.log(user_answer_list);
        if (user_answer_list.length === quiz_list.length) {
            
            const _score = (100/quiz_list.length)* quiz_list.filter((q, idx) => {
                return q.answer === user_answer_list[idx];
            
            }).length;   
            
            const score = Math.round(_score);
            console.log(_score, score);
            history.push("/score");
            
            return;
        }
    }, [user_answer_list]);



    return(
        <div>
            <img src = {img}/>
            <p>{ user_answer_list.length + 1 }번 문제</p>
            <h3>{quiz_list[user_answer_list.length].question}</h3>
            
                

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