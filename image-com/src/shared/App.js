
import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {history} from "../redux/configureStore"

import Header from '../components/Header';
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import PostWrite from '../pages/PostWrite';
import Signup from "../pages/Signup";
import PostDetail from '../pages/PostDetail';

import { Grid, Button } from '../elements';
import Permit from "./Permit";


import { useDispatch } from 'react-redux';
import {actionCreators as userActions } from "../redux/modules/user"

import {apiKey} from "./firebase"
function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true:false;
  React.useEffect(() => {
    //if 함수에 매개변수는 session 이 있니? 라고 물어봐주는 함수 
    if(is_session) {
      dispatch(userActions.loginCheckFB());

    }
  }, []);

  return (
    <div className="App">
      <React.Fragment>
        <Grid>
          <Header></Header>
          <ConnectedRouter history={history}>
          {/* <BrowserRouter> */}
            <Route path="/" exact component={PostList}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/write" exact component={PostWrite}/>
            <Route path="/post/:id" exact component={PostDetail}/> 
          {/* </BrowserRouter> */}
          </ConnectedRouter>
        </Grid>
        <Permit>
          <Button is_float text="+"></Button>
          {/* <div style = {{background:"#888", width:"50px" ,height:"50px",}}></div> */}
        </Permit>
      </React.Fragment>
    </div>
  );
}

export default App;

