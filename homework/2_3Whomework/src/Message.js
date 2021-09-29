import React from "react";
import img from "./emo.png";

import {useHistory} from "react-router-dom"
const Message = (props) => {
    const history = useHistory();
    return(
        <div>
            <img src={img} style={{ width: "80%", margin: "-70px 16px 48px 16px" }}/>
            <h3>누구누구에게 남기는 한마디</h3>
            <input />
            <button onClick={() => {
                history.push("/ranking");
            }}
            >남기고 랭킹 보러가기</button>
        </div>

    )
}

export default Message;
