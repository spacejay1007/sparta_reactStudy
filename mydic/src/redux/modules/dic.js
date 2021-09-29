//dic.js
import {db} from "../../firebase"
import { collection, doc, getDoc, getDocs ,addDoc, updateDoc, deleteDoc, getDocFromCache} from "@firebase/firestore";


//Action
const LOAD = "dic/LOAD"

const CREATE = "dic/CREATE";
const DELETE = "dic/DELETE";

const initialState={
    list:
    [{word:"1", desc:"1", exmp:"1"},
    {word:"2", desc:"2", exmp:"2"},
    {word:"3", desc:"3", exmp:"3"},],
};

//ActionCreators
export function loadDic(dic_list) {
    return {type:LOAD, dic_list:dic_list}
}
export function inLoaded(loaded){
    return {type:LOADED, loaded}
}
export function createDic(dic) {
    return {type:CREATE, dic:dic};
}


//middlewares
export const loadDicFB = () => {
    return async function(dispatch) {
        const dic_data = await getDocs(collection(db,"dict"))
        // console.log(dic_data);

        let dic_list = [];
        dic_data.forEach((d) => {
            console.log(d.data());
            dic_list.push({id:d.id,...d.data()})
        })
        // console.log(dic_list);
        dispatch(loadDic(dic_list));
    }
}

export const addDicFB = (dic) => {
    return async function (dispatch) {
        // console.log(db);
        // dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db, "dict"), dic);
        const _dic = await getDoc(docRef);
        // console.log(_dic);
        const dic_data = {id:_dic.id, ..._dic.data()};
        
        dispatch(createDic(dic_data));
        
    }
}   


// Reducer
export default function reducer(state=initialState, action={}) {
    switch(action.type) {
        case "dic/LOAD": {
            return {list : action.dic_list};
        }   
       
       
        case "dic/CREATE": {
            const new_dic_list = [...state.list, action.dic];
            return {...state, list : new_dic_list};
        }
        default:
            return state;
    }
}



// do reducer stuff



