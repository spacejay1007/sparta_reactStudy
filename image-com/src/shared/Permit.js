import React from "react";
import { useSelector } from "react-redux";
import {apiKey} from "./firebase"

const Permit = (props) => {
    //user 정보가 있나 없나 체크를 해야줘한다. 
    // 토큰 X 세션이 있나 없나 체크를 해야함  state.user 에  user(is_login) 가 있냐 없냐
    const is_login = useSelector (state => state.user.is_login);

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key)? true:false;
if (is_session && is_login) {
    return (
        <React.Fragment>{props.children}</React.Fragment>
    )}
    return null;
};
export default Permit;