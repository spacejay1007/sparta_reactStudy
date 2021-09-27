import React from "react";
import { useParams } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {deleteBucket, updateBucket} from "./redux/modules/bucket"; 

//페이지 이동할 때에 쓰는 것은 useHistory
import {useHistory} from "react-router-dom"

const Detail = (props) => {
    const dispach = useDispatch();
    const history = useHistory();
    const params = useParams();
    const bucket_index = params.index;
    console.log(bucket_index);
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(bucket_list);
    console.log(bucket_list[bucket_index]);



    return(
        <div>
            {/* 텍스트를 보여주는 곳 */}
            <h1><>{bucket_list[bucket_index].text}</></h1>
            {/* <h1>상세페이지입니다.</h1> */}
            <button onClick={() => {
                console.log("수정");
                dispach(updateBucket(bucket_index));
            }}>완료하기</button>

            <button onClick={() => {
                console.log("ㅅㅈ");
                
                dispach(deleteBucket(bucket_index));
                history.goBack();
            }}>삭제하기</button>
        </div>
       
            
    );

} 

export default Detail;
