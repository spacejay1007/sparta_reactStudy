import React from "react";
import {useHistory} from "react-router-dom";

const Dog = (props) => {
    const history = useHistory();
    console.log(history);
    console.log(props);
    return <div onClick={() => {
        // props.history.push("/")
        history.push("/cat")
    }}> 강아지 화면입니다.</div>;
};

export default Dog;
