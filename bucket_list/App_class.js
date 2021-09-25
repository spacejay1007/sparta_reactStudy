// import logo from './logo.svg';
// import './App.css';
// import './style.css';
import React from 'react';
import styled from 'styled-components';
import BucketList from './BucketList';

// form 뒷부분은 현재 기준 폴더를 의미하는것
// import {BucketList} from "./BucketList";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: ["영화관 가기", "제주도 가기", "헬스장 가기"],
    }
    this.text = React.createRef();

  }

  //카드 추가 < Ref = 이름표로 생각하면 됨 >
  componentDidMount() {
    console.log(this.text);
    
  }

    
  addBucket = () => {
    const new_item = this.text.current.value;
    //... > 스프래드 문법 ... 안에 들어있는 요소를 배열이던가 딕셔너리를 밖으로 다꺼낸다.
    this.setState({list:[...this.state.list, new_item]})
    
  }

  render() {
    // console.log(this.text.current);
    // console.log(this.state.list);
    return (
      <AppWrap>
        {/* <MyStyled/> */}
        {/* <MyStyled>
          <p>하이</p>
        </MyStyled> */}
        <CenterBox>          
        {/* <div className="centerBox"> */}
          <Title>내 버킷리스트</Title>
          {/* <h1>내 버킷리스트</h1> */}
          {/* <hr className= "line" /> */}
          <Line/>

          <BucketList list={this.state.list} />
        {/* </div> */}
        </CenterBox>
        
         {/* list = {this.state.list} 는 Busketlist.js 파일의 const BuketList 로 보내준다 
      그러므로 list 의 이름의 변수의 값이 BusketList.js 파일의 변수와 같아야함 */}
        <InputWrap>
          <input type="text" ref = {this.text}/>
          {/* // onChange={() => {
          //   console.log(this.text.current.value);
          // }}
          // /> */}
          <button onClick={this.addBucket}>추가하기</button>
        </InputWrap>
      
      
      
      </AppWrap>


    )
  }
}
const AppWrap = styled.div`
  background-color: rgb(221, 221, 221);
  height: 100vh;
  /* vh는 화면을 기준으로 100%로 준다는 */    
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const InputWrap = styled.div`
background-color: rgb(255,255,255);
max-width: 40vh;
height: 80vh;
width : 50vw;
margin: auto;
border: 1px solid #ccc;
border-radius: 3px;
padding: 16px;
`


const CenterBox = styled.div`
  background-color: rgb(255,255,255);
  max-width: 40vh;
  height: 80vh;
  width : 50vw;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 16px;
  
`;
const Title = styled.h1`
  color:slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 20px 0px ;
`;



// const MyStyled = styled.div`
//   width: 50vw;
//   min-height:150px;
//   background-color : ${(props) => (props.bg_color? "red": "purple")};

//   p{
//     color: white;
//   }
//   &:hover{
//     background-color : red;
//   }
  
// `;

// p{}태그 는 네스팅이라고 함
// 나 자신은 & 로 쓴다


// function App() {
//   return (
//     <div className="App">


//       <BucketList/>
//     </div>
//   );
// }

export default App;
