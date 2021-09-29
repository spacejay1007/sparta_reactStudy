import React from "react";
import styled from "styled-components"
import {LocalLibrary} from "@material-ui/icons"

const Spinner = () => {
    return (<Outter>
        <LocalLibrary style={{
            color:"white", fontSize:"150px"}}/>
    </Outter>);   
}
const Outter = styled.div`
    background:#A9A9A9;
    width :100vw;
    height : 100vh;
    position : fixed;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export default Spinner;