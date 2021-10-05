import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/Common";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {

    // console.log(id);
    // //<^ = 첫글자> 아래의 의미는 첫글자에는 숫자, 대소문자만 들어간다 라는 듯
    // // *는 여러개가 나온다는 뜻

    // console.log(_reg.test(id))
    
    if(id === "" || pwd === ""){
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    if(!emailCheck(id)){
      window.alert("이메일 형식이 맞지 않습니다. ")
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            //비밀번호 ..... 으로 블라인드 패스워드 하는 방법
            //Input.js 에서 13번째 줄 ELinput type ={type} 적용하고
            // 21 번 줄에 type: "text" 추가
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

