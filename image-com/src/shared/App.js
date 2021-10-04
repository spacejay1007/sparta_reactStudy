
import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {history} from "../redux/configureStore"

import Header from '../components/Header';
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Grid } from '../elements';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Grid>
          <Header></Header>
          <ConnectedRouter history={history}>
          <BrowserRouter>
            <Route path="/" exact component={PostList}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/Signup" exact component={Signup}/>
          </BrowserRouter>
          </ConnectedRouter>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default App;

