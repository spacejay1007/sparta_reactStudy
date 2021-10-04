
import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';
import PostList from "../pages/PostList";
import Login from "../pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact componet={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
