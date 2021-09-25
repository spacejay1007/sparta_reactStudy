import logo from './logo.svg';
import styled from 'styled-components';


import React from 'react';
import './App.css';
import Start from './start';
import Quiz from './Quiz';
import Score from './Score';

import { Route } from 'react-router';


function App() {
  const [name, setName] = React.useState("이놈의");
  return (
    <div className="App" style={{ 
      margin : "auto",
      backgroundColor : "black",
      height : "100vh",
      
    }}>
      <Route path ="/" exact>
        <Start name={name} />
      </Route>

      <Route path ="/quiz" exact>
        <Quiz />
      </Route>

      <Route path ="/score" exact>
        <Score />
      </Route>
    </div>
  );
}

export default App;
