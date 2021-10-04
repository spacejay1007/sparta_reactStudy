import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const{bold,color,size, children} = props;
    const styles = {
        bold:bold,
        color:color,
        size:size}; 
    return(
        <React.Fragment>
            <P {...styles}>
                {children}
            </P>
        </React.Fragment>
    )
}

Text.defaultProps = {
    bold :false,
    color : '#222831',
    size : '14px',
}

const P = styled.p`
    color:${(props)=>props.color};
    font-size:${(props)=>props.size};
    font-weight:${(props)=>props.bold? "600":"400"};
`;
//font-weight:${(props)=>props.bold? "600":"400"}; 
// props의 bold 가 있으면 600을 주고 아니면 400을 줘라

export default Text;