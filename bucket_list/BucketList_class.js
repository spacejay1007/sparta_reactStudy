// // React 라는걸 가져올거야 react라는 객체에서 
// import React from "react";




// const BucketList = (props) =>{
//     console.log(props);
//     return (
//         <div> 버킷 리스트</div>


//     );


// }

// // export {BucketList};
// export default BucketList;

//--------------------------------위는 강의 내용---------------------------------------

// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
// return (
// <div>버킷 리스트</div>
// );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = ({ list }) => {

    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
    const my_lists = list;
    const my_wrap = React.useRef(1);

    
    // 
    window.setTimeout(() => {

    }, 1000);
    console.log(my_wrap);
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div ref = {my_wrap}>
            {
                // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요.
                // 자세한 사용법은 아래 링크를 확인해주세요.
                // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

                my_lists.map((list, index) => {
                    // 콘솔을 확인해봅시다 :)
                    console.log(list);
                    // return (<div className="box-item" key={index}>{list}</div>);
                    return (<BoxItem key={index}>{list}</BoxItem>);
                })
            }
        </div>
    );
}

const BoxItem = styled.div`
    padding:15px;
    margin: 10px;
    background-color: aliceblue;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    border: 1px solid rgb(229, 229, 243)

`;

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;





// ==========================Remind==================================


const BucketList = (props) => {
    
    return (
        <div>
            버킷리스트
        
        </div>
    );
}
