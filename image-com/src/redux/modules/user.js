import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import {auth} from "../../shared/firebase"

//Action
// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

const SET_USER = "SET_USER"

//Action Creators
// const logIn = createAction(LOG_IN, (user) => ({ user }));
//createAtion 함수를 사용하였을때 (Type ,(내가 어떤 정보 파라미터받아 온거를) => ({넘겨주는거}) )
//아래는 기존에 쓰던
// const logIn = (user) => {
//     return {
//         type : LOG_IN,
//         user
//     }
// }
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({user}));

//initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name : 'Jay',

}

// middleware actions
const loginAction = (user) => {
  return function (dispatch, getState, {history}) {
    console.log(history);
    // dispatch(logIn(user));
    dispatch(setUser(user));
    history.push("/");
  }
}

const signupFB = (id,pwd,name) => {
  return function (dispatch, getState, {history}){


  auth
  .createUserWithEmailAndPassword(id,pwd)
  .then((user) => {
    // Signed in
    console.log(user);
    // var user = userCredential.user;
    // ...
  })


  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode, errorMessage);
  })
}}

//Reducer

//기존 Reducer 사용하던 방법
// const reducer = (state={},action={}) => {
//     switch(action,type){
//         case "LOG_IN" : {
//             state.user = action.user;
//         }
//     }
// }

//CreateActions 사용하였을때 hadleAction 사용하는법
// ([Action(ex.LOG_IN)]: (state,action) =>{immer 사용법은 아래}
//,{기본값 어떤것이 있었는지 *ex.initialState ={}})

// immer => produce(기본값(state), ()=>{})

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    // [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
    [LOG_OUT]: (state, action) => produce(state, (draft) => { deleteCookie("is_login"); draft.user = null; draft.is_login = false; }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  setUser,
  getUser,
  logOut,
  loginAction,
  signupFB,
  
};

export { actionCreators };
