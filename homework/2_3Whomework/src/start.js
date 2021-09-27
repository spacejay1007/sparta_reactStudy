import React from "react";
import img from "./emo.png";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setName } from "./redux/modules/user";
const Start = (props) => {
    console.log(props);
    const history = useHistory();
    const dispatch=useDispatch();
    const name_ref=React.useRef();

    return (
        <div style = {{
            backgroundColor : "black",
            display:"flex",
            flexDirection :"column",
            padding : "16px",
            boxSizing: "border-box",            
        }}>
            <img src = {img} style={{
                // width:"70vw",
                margin:"16px",

            }}/>
            <h1 style={{
                color:"white",
                fontSize : "18px",
            }}>나는 <span style={{
                backgroundColor : "#c54e4e",
                borderRadius : "10px",
            }}>{props.name}</span> 대해서 얼마나 알고있을까?</h1>
            <input ref={name_ref} 
            style = {{
                border : "1px solid #c54e4e",
                borderRadius : "10px",
                padding : "12px",                
            }}></input>

            <button onClick={() => {           
                    console.log(name_ref.current.value);
                    dispatch(setName(name_ref.current.value));
                    history.push("/quiz");
        
            }}
            style={{
                backgroundColor : "lightblue",
                padding : "12px",
                border : "1px solid #c54e4e",
                borderRadius : "10px",
                margin : "30px 0px",
            }}>시작하기</button>
        </div>
    );

}
export default Start;
