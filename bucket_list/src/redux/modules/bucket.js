// bucket.js

// Actions
// const LOAD = 'my-app/widgets/LOAD' ; 서버에서 가져오는것
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
    list : ["영화관 가기", "매일 책읽기", "수영 배우기", "공부하기"],
};

// Action Creators
export function createBucket(bucket) {
    console.log("액션을 생성할거야");
    return { type: CREATE, bucket: bucket};
    }
export function deleteBucket(bucket_index) {
    console.log("액션을 삭제할거야", bucket_index);
    return { type: DELETE, bucket_index: bucket_index};
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