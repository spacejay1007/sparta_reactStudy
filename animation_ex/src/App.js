import styled, {keyframes} from "styled-components";
 

function App() {
  return (
    <div className="App">
      <Box/>
    </div>
  );
}

const boxAnimation = keyframes`
  0% {
    border-radius:0px; 
    top:400px;
  }

  50% {
    border-radius:20px;
    top:400px;
  }

  100%{
    border-radius:50px;
    top:200px;
  }
`;

const Box = styled.div`
  width : 100px;
  height : 100px;
  background : green;

  border-radius : 50px; 
  position : absolute;
  top : 20px;
  left: 20px;
  animation : ${boxAnimation} 2s 1s infinite linear alternate;
 `;
  
 // border-radius : 50px; 동그라미로 만들어주는
//  position : absolute;  원래 위치와 상관없이 위치를 지정할 수 있다
//  top : 20px;           상하로 움직이는
//  left: 20px;           좌우로 움직이는
//  animation : ${boxAnimation} 2s 1s infinite linear alternate;
//  애니메이션 실행하는 boxAnimation 은 아래에서 불러온거 그 뒤는 속성


export default App;
