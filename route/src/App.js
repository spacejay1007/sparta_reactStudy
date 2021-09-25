import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";
import Home from "./Home";
import Dog from "./Dog";
import Cat from "./Cat";


function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog로 가기</Link>
      </div>
      {/* exact 는 (/ === ) 면 보여줘라 그 이외에는 제외*/}
      <Route path="/" exact>
        <Home/ >
      </Route>
      {/* <Route path="/cat/:cat_name" exact component={Cat}> */}
      <Route path="/cat/" exact component={Cat}>
        {/* <Cat /> */}
      </Route>
      <Route path="/dog">
        <Dog />
      </Route>
    </div>
  );
}

export default App;
