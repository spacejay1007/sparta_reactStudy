import React from "react";
// import styled from "styled-components";
import Text from "./Text";

const Input = (props) => {
    const{label,placeholder,_onChange}=props;
    
    return (
        <React.Fragment>
            <Text>{label}</Text>
            <Input placeholder={placeholder} onChange={_onChange}/>
        </React.Fragment>
    )
}
Input.defaultProps={
    label:"텍스트",
    placeholder: "텍스트를 입력해주세요",
    _onChange: ()=> {}
}

export default Input;