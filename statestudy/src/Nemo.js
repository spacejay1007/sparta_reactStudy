import React from "react";

const Nemo = (props) => {
    //  React.useState(3) React 훅을 써서  state 를 만들었음 [count 는 state 값, setState count를 변경하는 수정하는 값]
    const [count, setCount] = React.useState(3);
    console.log(count);
    //배열만들기
    //
    const nemo_count = Array.from({ length: count }, (v, i) => i);

    const addNemo = () => {
        setCount(count + 1);
    }

    const removeNemo = () => {
        if(count > 0) {
            setCount(count - 1);
        }else{
            window.alert('더 누르지마!')
        }
        
    }

    return (
        <>
            {nemo_count.map((n, i) => {
                // console.log(this.state);
                return (
                    <div key={i} style={{
                        width: "150px",
                        height: "150px",
                        backgroundColor: "lightgray",
                        margin: "10px",
                    }}>
                        nemo
                    </div>
                );
            })
            }
            < div >

                {/* <button onClick={this.addNemo}>하나 추가</button>
            <button onClick={() => {
              this.removeNemo();
            }}> 하나 빼기</button> */}
                <button onClick={addNemo}>하나 추가</button>
                <button onClick={removeNemo}>하나 빼기</button>
            </div >
        </>
    );
}

export default Nemo;