//어떤 데이터를 넣을거야 > 퀴즈 목록/ 유저 정답 목록
//어떻게 수정도 해볼거야 > 유저가 선택한 오엑스 정답을 정답 목록에 추가해줄거다.

// 액션 타입
const ADD_ANSWER = 'quiz/ADD_ANSWER';
// 액션 생성 함수
export const addAnswer = (user_answer) => {
    return {type:ADD_ANSWER,user_answer};
}


const initialState = {
  quiz_list: [
    { question: "이놈은 1살이다", answer: false },
    { question: "이놈은 남자다", answer: true },
    { question: "이놈은 코딩한다", answer: false },
  ],
  user_answer_list: [],
};


export default function reducer(state = initialState , action ={}){
    switch(action.type){
        case "quiz/ADD_ANSWER" : {
            console.log(action);
            const new_user_answer_list = [...state.user_answer_list, action.user_answer];
            console.log(new_user_answer_list)
            return {...state, user_answer_list : new_user_answer_list};
        }
        default :
            return state;
    }


}




