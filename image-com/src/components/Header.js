import React from "react";
import { Grid,Text,Button } from "../elements";
import { getCookie,deleteCookie } from "../shared/Cookie";

import {useSelector, useDispatch} from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import Permit from "../shared/Permit"

const Header =(props) => {
    const is_login = useSelector((state) => state.user.is_login)
    const dispatch = useDispatch();
    // const [is_login,setIsLogin] = React.useState(false);
    
    // React.useEffect(() => {
    //     let cookie = getCookie("user_id");
    //     console.log(cookie);

    //     if(cookie){
    //         setIsLogin(true);
    //     }else{
    //         setIsLogin(false);
    //     }
    // })
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    //sessing 키 가 있으면 로그인을 했다. 키가 없으면 로그인을 안했다!
    const is_session = sessionStorage.getItem(_session_key)? true:false;
    // console.log(_session_key);
    // console.log(sessionStorage.getItem(_session_key));
    console.log(is_session);
    if(is_login && is_session ){
        return(
            <Permit>
            <React.Fragment>
            <Grid is_flex padding="16px">
                <Grid>
                    <Text margin="0px" size = "24px" bold>하이</Text>
                </Grid>
                <Grid is_flex>
                    <Button text="내정보"></Button>
                    <Button text="알림"></Button>
                    <Button text="로그아웃" _onClick={() =>{
                        dispatch(userActions.logoutFB({}));
                    }}
                        ></Button>  
                </Grid>
    
                
            </Grid>
        </React.Fragment>
        </Permit>
        );
    }
    // <Permit>
    //     <React.Fragment>
    //         <Grid is_flex padding="16px">
    //             <Grid>
    //                 <Text margin="0px" size = "24px" bold>하이</Text>
    //             </Grid>
    //             <Grid is_flex>
    //                 <Button text="내정보"></Button>
    //                 <Button text="알림"></Button>
    //                 <Button text="로그아웃" _onClick={() =>{
    //                     dispatch(userActions.logoutFB({}));
    //                 }}
    //                     ></Button>  
    //             </Grid>
    
                
    //         </Grid>
    //     </React.Fragment>
    // </Permit>

    return(
        <React.Fragment>
            <Grid is_flex padding="16px">
                <Grid>
                    <Text margin="0px" size = "24px" bold>하이</Text>
                </Grid>
                <Grid is_flex>
                    <Button text="로그인" _onClick={()=>{
                        history.push("/login");
                    }}></Button>

                    <Button text="회원가입" _onClick={()=>{
                        history.push("/signup");
                    }}
                    ></Button>
                </Grid>

                
            </Grid>
        </React.Fragment>
    );
}

Header.defaultProps = {

}

export default Header;