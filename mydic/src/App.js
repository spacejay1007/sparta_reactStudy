
import React from 'react';
//react
import { useSelector } from "react-redux";
import {Route, Switch} from "react-router-dom";
//Load
import DicList from './DicList';
import AddDic from './AddDic';
import {db} from './firebase'



function App() {
  return (
    <>
      <div className="App">        
        <Switch>
          <Route path="/" exact> 
            <DicList />
            </Route>
          <Route path="/addDic" exact>
            <AddDic />
            </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
