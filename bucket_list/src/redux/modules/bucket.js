// bucket.js

import {db} from "../../firebase"
import { collection, doc, getDoc, getDocs ,addDoc, updateDoc, deleteDoc} from "@firebase/firestore";

// Actions
// const LOAD = 'my-app/widgets/LOAD' ; 서버에서 가져오는것
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';

const LOAD = 'bucket/LOAD';
const LOADED = 'bucket/LOADED'
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
    list : [{text: "영화관 가기", completed:false},
    {text: "매일 책읽기", completed:false},
    {text: "수영 배우기", completed:false},
    {text: "공부하기", completed:false},]
    //위는 데이터 하나하나를 dic > 노출되는 텍스트는 그대로 가고 완료, 완료 되지 않았다면 false 로 넣어준다.
    //아래 list는 배열로 했다 실행 했다 실행 X 판단하는 무언가를 넣어주기가 어려움  (텍스트만 있는 배열) 
    // list : ["영화관 가기", "매일 책읽기", "수영 배우기", "공부하기"],
};

// Action Creators

export function createBucket(bucket) {
    console.log("액션을 생성할거야");
    return { type: CREATE, bucket: bucket};
    }

export function updateBucket(bucket_index) {
    // console.log(state,action);
    return { type: UPDATE, bucket_index : bucket_index };
    }

export function deleteBucket(bucket_index) {
    console.log("액션을 삭제할거야", bucket_index);
    return { type: DELETE, bucket_index: bucket_index};
    }


export function loadBucket(bucket_list){
    return {type:LOAD, bucket_list:bucket_list}
}

export function inLoaded(loaded){
    return {type:LOADED, loaded}
}
//Middlewares
//비동기 통신일때에는 async를 붙여줘야 한다
//firestore 에서 가지고 오는 데이터를 bucket_data 에 넣어준다
export const loadBucketFB = () => {
    return async function(dispatch) {
        const bucket_data = await getDocs(collection(db,"bucket"));
        //getDocs(collection (db=firejs에서 만들어놓은 변수로 firebase에서 데이터를 받아오는 곳을 말함
        // "bucket" = firebase 의 ID값(프로젝트이름(collection name)) ))
        // await 는 primise=내가 너에게 다시 데이터를 다시 돌려줄게 라는 약속 이(가) 나왔을때 써주는 함수 
        console.log(bucket_data);

        let bucket_list= [];
        //forEach 에 들어가는 b 는 아무거나 들어가도 상관없음
        bucket_data.forEach((b) => {
            console.log(b.data());
            bucket_list.push({id:b.id,...b.data()});
        });
        console.log(bucket_list);
        dispatch(loadBucket(bucket_list));
    } 
}

export const addBucketFB = (bucket) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db,"bucket"), bucket);
        //상수로 묶어주는 작업
        const _bucket = await getDoc(docRef);
        const bucket_data = {id:_bucket.id , ..._bucket.data()};
        console.log(bucket_data);        
        // console.log((await getDoc(docRef)).data());
        //     docRef.data());

        dispatch(createBucket(bucket_data));
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "bucket/CREATE":{
            console.log("이제 값을 바꿀거야");
            const new_bucket_list = [...state.list,action.bucket];
            return {list : new_bucket_list};
        }

        case "bucket/UPDATE":{
            console.log("이제 값을 수정할거야");
            // console.log(state,action);

            const new_bucket_list = state.list.map((l , idx) => {
                // console.log(l);
                // if(parseInt(action.bucket_index) === idx)
                if(action.bucket_index == idx){
                    return{...l, completed:true};
                }else{
                    return l;
                }
            })
            console.log({list:new_bucket_list});
            return {list:new_bucket_list};
        }
        
        case "bucket/DELETE":{
            console.log(state,action);
            const new_bucket_list = state.list.filter((l,idx)=> {
                // console.log(action.bucket_index != idx, parseInt(action.bucket_index), idx);
                return parseInt(action.bucket_index) != idx;
            })
           
            return {list: new_bucket_list} ;
            // console.log("이제 값을 바꿀거야");
            // const new_bucket_list = [...state.list,action.bucket];
            // return {list : new_bucket_list};
        }  

        case "bucket/LOAD":{
            return{list:action.bucket_list};
        }

        case "bucket/LOADED":{
            return {...state, is_loaded:action.loaded};
        }   




default: return state;
}
}



// export function createWidget(widget) {
// return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
// return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
// return { type: REMOVE, widget };
// }

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }