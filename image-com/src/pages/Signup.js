import React from "react";

import { Grid, Input, Button, Text } from "../elements";

import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import { emailCheck } from "../shared/Common";

const Signup = (props) => {
    const dispatch = useDispatch();
    
    const[id, setId] = React.useState("");
    const[pwd, setPwd] = React.useState("");
    const[user_name, setUserName] = React.useState("");
    const[pwd_check, setPwdCheck] = React.useState("");

    const signup = () => {
        if (id === "" || pwd === "" || user_name === "") {
          window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
          return;
        }
    
        if(!emailCheck(id)){
          window.alert('이메일 형식이 맞지 않습니다!');
          return;
        }
        
        if (pwd !== pwd_check) {
          window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
          return;
        }
    
        dispatch(userActions.signupFB(id, pwd, user_name));
      };
    return (
    <React.Fragment>
      <Grid>
        <Grid>
            <Text size="32px">회원가입</Text>
        </Grid>

        <Grid padding="16px 0px">
            <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
                setId(e.target.value);
                // console.log("아이디를 입력했다!");
            }}
            />
        </Grid>
        <Grid padding="16px 0px">
            <Input
            label="닉네임"
            placeholder="닉네임를 입력해주세요"
            _onChange={(e) => {
                // console.log(e.target);
                setUserName(e.target.value);
            }}
             // _onchage= (e) input에 적혀지는 것을 받는다 
            />
        </Grid>
        <Grid padding="16px 0px">
            <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요"
            _onChange={(e) => {
                // console.log("패스워드를 입력했다!");
                setPwd(e.target.value);
            }}
            />
        </Grid>
        <Grid padding="16px 0px">
            <Input
            label="비밀번호 확인"
            placeholder="비밀번호 확인을 입력해주세요"
            _onChange={(e) => {
                // console.log("비밀번호 확인 입력했다!");
                setPwdCheck(e.target.value);
            }}
            />
        </Grid>
        <Grid>
            <Button text="회원가입하기" _onClick={signup}></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;


