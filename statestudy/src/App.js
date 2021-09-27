import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    };
  }

  componentDidMount() {
  }
// setState 함수 는 위에있는 state 를 바꿔주는 함수
  addNemo = () => {
    this.setState({count: this.state.count +1});
  }
  removeNemo = () =>{
    if(this.state.count > 0){
      this.setState({count: this.state.count -1});
    }else{
      window.alert('네모없음 추가해주세요')
    }      
  }
  render() {
    // console.log(nemo_count);
    return (
      <div className="App">
        <Nemo/>


      </div>
    );
  }
}
export default App;
