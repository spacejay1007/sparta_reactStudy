import { createAction,  handleActions } from "redux-actions";
import {produce} from "immer";
import { firestore } from "../../shared/firebase";
//목록가지고 오는거 추가하는거

const SET_POST ="SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list)=> ({post_list}));
const addPost = createAction(ADD_POST, (post)=> ({post}));

const initialState = {
    list: [], 
};

const initialPost ={
    id: 0,
    user_info :{
        user_name: "Jay",
        user_profile:"https://pds.joins.com/news/component/htmlphoto_mmdata/201705/31/ec7e79e9-7226-4b53-aa86-f87d7d9a9635.jpg",         
    },
    imgae_url:"https://pds.joins.com/news/component/htmlphoto_mmdata/201705/31/ec7e79e9-7226-4b53-aa86-f87d7d9a9635.jpg",  
    contents: "축구팬이시네요",
    comment_cnt : 10,
    insert_dt:"2021-02-27 10:00:00",
}

//post 를 firebase에서 가지고 온다

const getPostFB = () => {
    return function(dispatch,getstate, {history}) {
        const postDB = firestore.collection("post");
        
        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc)=>{
            // console.log(doc, doc.data())
                // ...doc.data() 가 firebase의 모든 initialList 를 표시 해준다 

            //     let _post = doc.data(); // fireStore에서 가져온 데이터
            //     let post = Object.keys(_post).reduce((acc,cur) => {

            //         if(cur.indexOf("user_") !== -1){
            //             return{
            //                 ...acc,
            //                 user_info :{ ...acc.user_info, [cur]: _post[cur]},
            //             };
            //         }
            //     return { ...acc, [cur] : _post[cur]};

            //     },
            //     {id: doc.id, user_info:{}}
            //     );
            //     post_list.push(post);
            // });
            // console.log(post_list);
            //     //데이터를 예쁘게 맞춰주냐면 파이어스토어에있는 데어터 포스트에 들어갈 데이터의 내용물은 갖다
            //     //하지만 형식은 다른 userinfo로 감싸져 있을뿐 dic에 있는 것은 배열로 만들어 줄거다
            //     //Object.keys(_post) -> 쓰면 배여로 만들어준다 ['comment_cnt','contents', ...]
            //     // 다음 내장함수를 사용하는데 맞춰주는데 .reduce() 를 사용
            //     //reduce는 누산한다라고 하고 연산을 한거에다가 또 연산을 한거다
            //     // 1~4 까지 있는 

            let _post ={
                id:doc.id,
                ...doc.data()
            };
            let post ={
                id:doc.id,
                user_info :{
                    user_name: _post.user_name,
                    user_profile:_post.user_profile, 
                    user_id : _post.user_id       
                },
                image_url:_post.image_url,  
                contents: _post.contents,
                comment_cnt : _post.comment_cnt,
                insert_dt: _post.insert_dt,
            };
            post_list.push(post);
        })
            dispatch(setPost(post_list));
            // console.log(post_list);
    });             
}};




//Reducer

export default handleActions  (
    {
        [SET_POST] : (state,action) => produce(state,(draft) => {
            draft.list = action.payload.post_list;
        }),
        [ADD_POST] : (state,action) => produce(state,(draft) => {

        }),
    }, initialState

);


const actionCreators = {
    setPost,
    addPost,
    getPostFB,
}

export {actionCreators};