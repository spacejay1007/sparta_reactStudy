import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
//redux 에서 코드 받아오기
import {useDispatch} from "react-redux"

import {actionCreators as userActions} from "../redux/modules/user"


const Login = (props) => {
  const dispatch = useDispatch();
  console.log(getCookie("user_id","user_pwd"));
  const login = () => {
    dispatch(userActions.loginAction({user_name:"kkim"}));
    // setCookie("user_id", "JJJay", 3);
    // setCookie("user_pwd", "1111", 3);
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={() => {
              console.log("아이디를 입력했다!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요"
            _onChange={() => {
              console.log("패스워드를 입력했다!");
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인했다!");
            // deleteCookie("user_id");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
